const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.232.156.181',
        user: 'root',
        password: 'toorroot',
        database: 'employees'
      })

      return this.pool
    }

    return this.pool
  }
}


const instance = new Connection()

module.exports = instance;