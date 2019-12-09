const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// for bcrypt
const saltRounds = 10

const signup = (req, res) => {
  // takes username and password from request body

  console.log(req.body)
  const { username, password } = req.body
  console.log(username, password)

  let sql = "INSERT INTO usersCredentials (username, password) VALUES (?, ?)"
  // bcrypt hashes password and stores usersname and hashed password into DB
  bcrypt.hash(password, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [ username, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  })
}

const login = (req, res) => {
  // username and password variables are collecte from request body
  const { username, password } = req.body
  // sql statement specifying what info we are gathering from the DB
  let sql = "SELECT * FROM usersCredentials WHERE username = ?"
  // formats username into the sql statement
  sql = mysql.format(sql, [ username ])
  // telling DB to query the information we specified above, and return the results if possible
  pool.query(sql, (err, rows) => {
    // returns error if error
    if (err) return handleSQLError(res, err)
    // if user does not exist, returns error
    if (!rows.length) return res.status(404).send('No matching users')

    // hash variable equal to password stored in DB (hashed)
    const hash = rows[0].password
    // compares password entered by user on login with hashed password in DB
    bcrypt.compare(password, hash)
      .then(result => {
        // no result means there was no match
        if (!result) return res.status(400).send('Invalid password')
        // data = collection of all of the fields of data in the first row
        const data = { ...rows[0] }
        console.log(data)
        // password is redacted for privacy
        data.password = 'REDACTED'
        // token is created using the user data, and given key 'secret' to unlock it later
        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token
        })
      })
  })
}

module.exports = {
  signup,
  login
}