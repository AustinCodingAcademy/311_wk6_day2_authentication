const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserByEmail = (req, res) => {
  let sql = "SELECT * FROM users WHERE email = ?"
  sql = mysql.format(sql, [ req.params.email ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserByLocation = (req, res) => {
  let sql = "SELECT * FROM users WHERE location = ?"
  sql = mysql.format(sql, [ req.params.location ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserByFirstName = (req, res) => {
  let sql = "SELECT * FROM users WHERE first_name = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getUserByLastName = (req, res) => {
  let sql = "SELECT * FROM users WHERE last_name = ?"
  sql = mysql.format(sql, [ req.params.last_name ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


const createUser = (req, res) => {
  const { username, first_name, last_name, email, password, location  } = req.body
  let sql = "INSERT INTO users (username, first_name, last_name, email, password, location) VALUES (?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ username, first_name, last_name, email, password, location ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateUserById = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteUserById = (req, res) => {
  let sql = "DELETE FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByLocation, 
  getUserByFirstName, 
  getUserByLastName,
  createUser,
  updateUserById,
  deleteUserById
}