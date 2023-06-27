const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');

const router = require('./routes/routes');
const admin = require('./routes/admin');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', router);
app.use('/admin', admin);

port = process.env.PORT;
const server = app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`);
});

module.exports = server;