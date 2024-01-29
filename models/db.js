const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'developer',
    password : 'supersecretpassword',
    database : 'mahasiswaw',
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection;