const dbConfig = require('../config/dbConfig.js')

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected to DB')
})
.catch(err => {
    console.log('Error: '+err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.posts = require('./postModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Yes re-sync done!')
})

module.exports = db
