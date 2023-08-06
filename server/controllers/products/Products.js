const Product = require('../../models/Product');

const Products = {
    getProductById: async (req, res) => {
        const productId = req.params.product_id;
        try {
            const product = await Product.findById(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            } else {
                return res.status(200).json({ product });
            }
        } catch (error) {
            res.status(404).json({ error });
        }
    },
}

module.exports = Products; 