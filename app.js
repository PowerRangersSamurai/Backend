const express = require('express');
const app = express();
require("express-async-errors");
require("dotenv").config();
const { Sequelize } = require('sequelize');
const config = require('./database/config');





app.use(express.json());

const port = process.env.PORT || 3000;

// const host = "database-1.cjgs35cvbfrq.us-east-1.rds.amazonaws.com";
// const dbport = "5432";
// const user = "astraxx04";
// const password = "Astraxx2542";
// const dataBase = "testing";

// const sequelize = new Sequelize('testing', user, password, {
//     host: host,
//     dialect: 'postgres',
//     port: dbport
// });

const sequelize = new Sequelize(config.development);

const startServer = async() => {
    try {
        console.log('Starting server');
        await sequelize.authenticate();
        app.listen(port, console.log(`Server started on port ${port}...`));
    }
    catch (err) {
        console.log(err);
    }
};

startServer();