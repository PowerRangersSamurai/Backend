const express = require('express');
const app = express();
require("express-async-errors");
const mysql = require("mysql");
require("dotenv").config();
const connectDB = require("./database/connect");


app.use(express.json());

const port = process.env.PORT || 3000;

const host = process.env.DB_HOST
const dbport = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const startServer = async() => {
    try {
        await connectDB(host, dbport, user, password);
        // console.log("RDS connection established successfully!");
        app.listen(port, console.log(`Server started on port ${port}...`));
    }
    catch (err) {
        console.log(err);
    }
};

startServer();