const Product = require('../models/Product');

const displayAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.render('products', { products });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const displayCreateProductForm = (req, res) => {
  res.render('new-product');
};

const createProduct = async (req, res) => {
  try {
    const { name, brand, category, sizes, colors, imgs } = req.body.product;

    const newProduct = new Product({
      name,
      brand,
      category,
      sizes,
      colors,
      imgs,
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const displayProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.render('product-details', { product });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const displayEditProductForm = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.render('edit-product', { product });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = req.body.product.name || product.name;
    product.brand = req.body.product.brand || product.brand;
    product.category = req.body.product.category || product.category;
    product.sizes = req.body.product.sizes || product.sizes;
    product.colors = req.body.product.colors || product.colors;
    product.imgs = req.body.product.imgs || product.imgs;
    product.updatedAt = Date.now();

    await product.save();

    res.redirect('products' + productId);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);

    res.redirect('products');
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
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
