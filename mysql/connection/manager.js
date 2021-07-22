const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'vbc2zqLeUVtRu2kn9drk',
    database: 'books'
}

const pool = mysql.createPool({
    ...config,
});

module.exports.getConnection = async function() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(err) return reject(err);
            return resolve(connection);
        });
    })
}