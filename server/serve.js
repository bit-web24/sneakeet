const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const router = require('./routes/routes');
const admin = require('./routes/admin');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

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
