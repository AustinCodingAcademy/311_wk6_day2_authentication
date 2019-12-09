const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.202.106.122',
        user: 'root',
        password: 'testing',
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}


const instance = new Connection()

module.exports = instance;