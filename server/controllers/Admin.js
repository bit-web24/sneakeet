const Product = require('../models/Product');

const displayAllProducts = (req, res) => {
    // Logic to fetch all products from the database
    // and render the view to display the products
    res.render('admin/products');
};

const displayCreateProductForm = (req, res) => {
    // Render the view with the form to create a new product
    res.render('admin/new-product');
};

const createProduct = async (req, res) => {
    // Logic to create a new product based on the data
    try {
        const { name, brand, category, sizes, colors, imgs } = req.body;
    
        // Create a new Product
        const newProduct = new Product({
          name,
          brand,
          category,
          sizes,
          colors,
          imgs,
        });
    
        // Save the Product to the database
        await newProduct.save();
    
        // Respond with a success message and the created Product
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    // submitted through the form
    // and redirect to the product details page
    res.redirect('/admin/products/:id');
};

const displayProduct = async (req, res) => {
    // Logic to fetch the product with the specified ID
    // from the database and render the view to display
    // the product details
    try {
        // Retrieve the product ID from the request
        const productId = req.params.productId;
    
        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // Respond with the product details
        res.status(200).json({ product });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    res.render('admin/product-details');
};

const displayEditProductForm = (req, res) => {
    // Logic to fetch the product with the specified ID
    // from the database and render the view with the form
    // to edit the product
    res.render('admin/edit-product');
};

const updateProduct = (req, res) => {
    // Logic to update the product with the specified ID
    // based on the data submitted through the form
    // and redirect to the product details page
    res.redirect('/admin/products/:id');
};

const deleteProduct = (req, res) => {
    // Logic to delete the product with the specified ID
    // from the database and redirect to the products list page
    res.redirect('/admin/products');
};

module.exports = {
    displayAllProducts,
    displayCreateProductForm,
    createProduct,
    displayProduct,
    displayEditProductForm,
    updateProduct,
    deleteProduct,
};