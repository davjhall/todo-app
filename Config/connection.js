const Sequelize = require("sequelize");

const sequelize = new Sequelize(// the keyword crestes a obj from a class sequelize. accepts 4 perams
    `todo_db`,
    `root`,
    `rootroot`,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
    }
); 

module.exports = sequelize; 
