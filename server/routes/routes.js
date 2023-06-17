const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { authorize } = require('../middlewares/auth');
const authanticator = require('../controllers/auth/authenticator');
const getCustomer = require('../controllers/customer/getCustomer');
const postCustomer = require('../controllers/customer/getCustomer');
const putCustomer = require('../controllers/customer/getCustomer');
const deleteCustomer = require('../controllers/customer/getCustomer');

dotenv.config();

const API_VERSION = process.env.API_VERSION;
const BASE_URL = `/api/${API_VERSION}/account/:_id`;

// Authanticate and Authorize
router.post('/signup', authanticator.signup);
router.post('/login', authanticator.login);

// Fetch Details
router.get(`${BASE_URL}`, authorize, );
router.get(`${BASE_URL}/cart`, authorize, );
router.get(`${BASE_URL}/orders`, authorize, );
router.get(`${BASE_URL}/favorites`, authorize, );
router.get(`${BASE_URL}/cart/:_id`, authorize, );
router.get(`${BASE_URL}/favorites/:_id`, authorize, );
router.get(`${BASE_URL}/orders/:_id`, authorize, );

// Push Details
router.put(`${BASE_URL}`, authorize, ); // Update account details
router.post(`${BASE_URL}/cart`, authorize, ); // Add item to cart 
router.post(`${BASE_URL}/favorites`, authorize, ); // Add item to favorite
router.post(`${BASE_URL}/orders`, authorize, ); // Order an item

// Remove Details
router.delete(`${BASE_URL}/cart/:_id`, authorize, ); // Remove item from cart
router.delete(`${BASE_URL}/favorites/:_id`, authorize, ); // Remove item from favorites
router.delete(`${BASE_URL}/orders/:_id`, authorize, ); // Withdraw an Order

module.exports = router;