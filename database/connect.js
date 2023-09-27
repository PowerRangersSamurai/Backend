const mysql = require("mysql");

const connectDB = async(host, port, user, password) => {
    const db = mysql.createConnection({
        host: host,
        port: port,
        user: user,
        password: password
    });

    return db;
    
    db.connect((err) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log("RDS connection established successfully!");
    });

    db.query('use testingdb', (err, results) => {
        if(err) {
            throw err;
        }
        console.log("Database connection established successfully");
    });

    db.query('SELECT * from user', (err, results, fields) => {
        if(err) {
            throw err;
        }
        console.log(fields[0].name + " " + fields[1].name);
        console.log(results);
    });

    db.end();

};

module.exports = connectDB;