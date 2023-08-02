const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { authorize } = require('../middlewares/auth');
const authanticator = require('../controllers/Authenticator');
const customer = require('../controllers/Customer');

dotenv.config();

const API_VERSION = process.env.API_VERSION;
const BASE_URL = `/${API_VERSION}/account/:_id`;

// Authanticate and Authorize
router.post('/v1/signup', authanticator.signup);
router.post('/v1/login', authanticator.login);
router.post('/v1/logout', authanticator.logout);

// Fetch Details
router.get(`${BASE_URL}`, authorize, customer.profile.getDetails);

router.get(`${BASE_URL}/orders`, authorize, customer.orders.getAllItems);
router.get(`${BASE_URL}/favorites`, authorize, customer.favorites.getAllItems);

router.get(`${BASE_URL}/favorites/:favorite_id`, authorize, customer.favorites.getItemById);
router.get(`${BASE_URL}/orders/:order_id`, authorize, customer.orders.getItemById);

// Push Details
router.put(`${BASE_URL}`, authorize, customer.profile.updateDetails); // Update account details

router.post(`${BASE_URL}/favorites`, authorize, customer.favorites.addItem); // Add item to favorite
router.post(`${BASE_URL}/orders`, authorize, customer.orders.addItem); // Order an item

// Remove Details
router.delete(`${BASE_URL}/favorites/:favorite_id`, authorize, customer.favorites.removeItem); // Remove item from favorites
router.delete(`${BASE_URL}/orders/:order_id`, authorize, customer.orders.removeItem); // Withdraw an Order
router.delete(`${BASE_URL}`, authorize, customer.profile.deleteDetails); // Delete account details

module.exports = router;