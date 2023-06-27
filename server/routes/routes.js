const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { authorize } = require('../middlewares/auth');
const authanticator = require('../controllers/auth/authenticator');
const customer = require('../controllers/Customer');

dotenv.config();

const API_VERSION = process.env.API_VERSION;
const BASE_URL = `/api/${API_VERSION}/account/:_id`;

// Authanticate and Authorize
router.post('/signup', authanticator.signup);
router.post('/login', authanticator.login);
router.post('/logout', authanticator.logout);

// Fetch Details
router.get(`${BASE_URL}`, authorize, customer.profile.getDetails);

router.get(`${BASE_URL}/cart`, authorize, customer.cart.getAllItems);
router.get(`${BASE_URL}/orders`, authorize, customer.orders.getAllItems);
router.get(`${BASE_URL}/favorites`, authorize, customer.favorites.getAllItems);

router.get(`${BASE_URL}/cart/:_id`, authorize, customer.cart.getItemById);
router.get(`${BASE_URL}/favorites/:_id`, authorize, customer.favorites.getItemById);
router.get(`${BASE_URL}/orders/:_id`, authorize, customer.orders.getItemById);

// Push Details
router.put(`${BASE_URL}`, authorize, customer.profile.updateDetails); // Update account details

router.post(`${BASE_URL}/cart`, authorize, customer.cart.addItem); // Add item to cart 
router.post(`${BASE_URL}/favorites`, authorize, customer.favorites.addItem); // Add item to favorite
router.post(`${BASE_URL}/orders`, authorize, customer.orders.addItem); // Order an item

// Remove Details
router.delete(`${BASE_URL}/cart/:_id`, authorize, customer.cart.removeItem); // Remove item from cart
router.delete(`${BASE_URL}/favorites/:_id`, authorize, customer.favorites.removeItem); // Remove item from favorites
router.delete(`${BASE_URL}/orders/:_id`, authorize, customer.orders.removeItem); // Withdraw an Order

module.exports = router;