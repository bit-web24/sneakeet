const express = require('express');
const router = express.Router();
const admin = require('../controllers/Admin');

// GET /admin/products - Display all products
router.get('/admin/products', admin.displayAllProducts);

// GET /admin/products/new - Display the form to create a new product
router.get('/admin/products/new', admin.displayCreateProductForm);

// POST /admin/products - Create a new product
router.post('/admin/products', admin.createProduct);

// GET /admin/products/:id - Display a specific product
router.get('/admin/products/:id', admin.displayProduct);

// GET /admin/products/:id/edit - Display the form to edit a product
router.get('/admin/products/:id/edit', admin.displayEditProductForm);

// PUT /admin/products/:id - Update a specific product
router.put('/admin/products/:id', admin.updateProduct);

// DELETE /admin/products/:id - Delete a specific product
router.delete('/admin/products/:id', admin.deleteProduct);

module.exports = router;