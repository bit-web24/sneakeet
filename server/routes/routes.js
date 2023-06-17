const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

const API_VERSION = process.env.API_VERSION;
const BASE_URL = `/api/${API_VERSION}/account/:_id`;

// Authanticate and Authorize
router.post('/signup');
router.post('/login');

// Fetch Details
router.get(`${BASE_URL}`);
router.get(`${BASE_URL}/cart`);
router.get(`${BASE_URL}/orders`);
router.get(`${BASE_URL}/favorites`);
router.get(`${BASE_URL}/cart/:_id`);
router.get(`${BASE_URL}/favorites/:_id`);
router.get(`${BASE_URL}/orders/:_id`);

// Push Details
router.put(`${BASE_URL}`); // Update account details
router.post(`${BASE_URL}/cart`); // Add item to cart 
router.post(`${BASE_URL}/favorites`); // Add item to favorite
router.post(`${BASE_URL}/orders`); // Order an item

// Remove Details
router.delete(`${BASE_URL}/cart/:_id`); // Remove item from cart
router.delete(`${BASE_URL}/favorites/:_id`); // Remove item from favorites
router.delete(`${BASE_URL}/orders/:_id`); // Withdraw an Order

module.exports = router;