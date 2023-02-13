const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  port: '3307',
  dialect: 'mysql'
}) //nodemvc é o nome do banco que vamos criar

try{
  sequelize.authenticate()
  console.log('Conectado com sucesso')
} catch(error){
  console.log(`Não foi possivel conectar. ${error}`)
}

module.exports = sequelize