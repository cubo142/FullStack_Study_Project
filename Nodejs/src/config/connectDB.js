const { Sequelize } = require('sequelize')

//Passing parameters seperately
const sequelize = new Sequelize('testingDB', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection establish suscessfully");
    } catch (error) {
        console.error("unable to connect db: ", error)
    }
}
module.exports = connectDB;