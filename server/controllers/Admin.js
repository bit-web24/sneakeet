const Product = require('../models/Product');

const displayAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.render('products', { products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const displayCreateProductForm = async (req, res) => {
  try {
    res.render('new-product');
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, brand, price, description, category, sizes, colors, imgs, availability } = req.body;

    // Convert the availability field to a boolean
    const isAvailable = availability === 'on';

    // Split colors and sizes strings into arrays and trim whitespace
    const colorArray = colors.split(',').map(color => color.trim());
    const sizeArray = sizes.split(',').map(size => size.trim());

    const newProduct = new Product({
      name,
      brand,
      price,
      description,
      category,
      sizes: sizeArray,
      colors: colorArray,
      imgs,
      availability: isAvailable,
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error });
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
    res.status(500).json({ error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = req.body.product.name;
    product.brand = req.body.product.brand;
    product.price = req.body.product.price;
    product.description = req.body.product.description;
    product.category = req.body.product.category;
    product.sizes = req.body.product.sizes;
    product.colors = req.body.product.colors;
    product.imgs = req.body.product.imgs;
    product.availability = req.body.product.availability;
    product.updatedAt = Date.now();

    await product.save();

    res.redirect('/products/' + productId);
    // res.status(200).json({ message: 'Product Updated Successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);

    res.redirect('/products');
  } catch (error) {
    res.status(500).json({ error });
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
