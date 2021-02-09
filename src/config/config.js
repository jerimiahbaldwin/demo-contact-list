let config = {
  "development": {
    "username": process.env.MYSQL_USER || 'admin',
    "password": process.env.MYSQL_PASSWORD || 'admin',
    "database": process.env.MYSQL_DATABASE || 'default',
    "host": process.env.MYSQL_HOST || 'localhost',
    "port": process.env.MYSQL_PORT || 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER || 'admin',
    "password": process.env.MYSQL_PASSWORD || 'admin',
    "database": process.env.MYSQL_DATABASE || 'default',
    "host": process.env.MYSQL_HOST || 'localhost',
    "port": process.env.MYSQL_PORT || 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER || 'admin',
    "password": process.env.MYSQL_PASSWORD || 'admin',
    "database": process.env.MYSQL_DATABASE || 'default',
    "host": process.env.MYSQL_HOST || 'localhost',
    "port": process.env.MYSQL_PORT || 3306,
    "dialect": "mysql"
  },
}

module.exports = config