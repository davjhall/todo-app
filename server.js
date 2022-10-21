const express = require("express");     //require means inport
const app = express();       // calls the express function

const sequelize = require("./config/connection");

const PORT = 5500;  //creat the port, just a var w/ a number in it

sequelize.sync().then(() => { //tells js to connect to your DB and then start the sever. Will only see log if DB is connected to server.

app.listen(PORT, () => {          //1st peramerter of listen method is the # where the server will exist in 2nd peram is the call back function
console.log("Im running");
}); 
})