const Sequelize = require('sequelize');

const db = new Sequelize('gryffinwheels', 'postgres', 'suryvillalobos', {
  host: 'db',
  port: 5432,
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('Successfully connected to db!');
  })
  .catch((err) => {
    console.log('Error authenticating connection')
  })

module.exports = {
  db
}