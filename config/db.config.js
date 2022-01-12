const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
//database connection
/* const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecom-react",
}); */

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected Successfully !!!');
});

module.exports = db;