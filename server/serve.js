const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectToDB = require('./database/db');
const path = require('path');

const router = require('./routes/routes');
const admin = require('./routes/admin');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

async function startServer() {
  try {
    // Database Connection
    const client = await connectToDB();

    // Set template engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Middleware
    app.use(bodyParser.json());
    app.use(cookieParser());

    // Routes
    app.use('/api', router);
    app.use('/admin', admin);

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();
