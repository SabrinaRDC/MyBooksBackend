const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bookAPIRouter = require('./router/book-api');
const port = 3000;
const connectionManager = require('./mysql/connection/manager');

//credentials
// const privateKey = fs.readFileSync('./sslcert/server.key');
// const certificate = fs.readFileSync('./sslcert/server.cert');
// const credentials = {ket: privateKey, cert: certificate};

//Express
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//router
app.use('/api/books', bookAPIRouter);

app.listen(port, () => console.log(`Listening on port ${port}.`));