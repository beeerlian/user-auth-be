const Sequelize = require("sequelize");
require('dotenv').config()

const db = {};

const sequelize = new Sequelize(process.env.SUPABASE_URL, { dialectModule: pg })

// const sequelize = new Sequelize(
//        mysqlConfig.DB,
//        mysqlConfig.USER,
//        mysqlConfig.PASSWORD,
//        mysqlConfig.HOST
// );

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize)
db.item = require('./item.model')(sequelize, Sequelize)


module.exports = db;