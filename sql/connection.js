const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.70.189.224',
        user: 'root',
        password: 'lexilaura123',
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;