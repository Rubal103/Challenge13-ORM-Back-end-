//dotnev will load environment variables

require('dotenv').config();

const Sequelize = require('sequelize');//new instance of sequelize to connect to local database

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


    //export sequelize
module.exports = sequelize;
