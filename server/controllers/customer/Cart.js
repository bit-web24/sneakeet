const Customer = require('../../models/Customer');

const Cart = {
    getAllItems: async (req, res) => {
        try {
            const { customerId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const cart = customer.cart;

            res.status(200).json({ cart });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getItemById: async (req, res) => {
        try {
            const { customerId, productId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const item = customer.cart.id(productId);
            if (!item) {
                return res.status(404).json({ message: 'Favorite not found' });
            }

            res.status(200).json({ item });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    addItem: async (req, res) => {
        try {
            const { customerId } = req.params;
            const { item } = req.body;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            customer.cart.push(item);

            await customer.save();

            res.status(200).json({ message: 'Item added to cart', cart: customer.cart });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    removeItem: async (req, res) => {
        try {
            const { customerId, productId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const item = customer.cart.id(productId);
            if (!item) {
                return res.status(404).json({ message: 'Favorite not found' });
            }

            item.remove();

            await customer.save();

            res.status(200).json({ message: 'Item removed from cart', cart: customer.cart });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = Cart;