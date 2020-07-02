const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'Den1.mysql1.gear.host',
        user: 'jamatx',
        password: 'Wx1x3-o?wbk7',
        database: 'jamatx'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;
