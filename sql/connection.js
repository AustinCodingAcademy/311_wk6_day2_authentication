const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.68.3.134',
        user: 'root',
        password: 'Argo20180814',
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;