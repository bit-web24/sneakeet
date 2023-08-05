const Customer = require('../../models/Customer');

const Cart = {
    getAllItems: async (req, res) => {
        try {
            const customerId = req.params._id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const cart = customer.cart;

            res.status(200).json({ cart });
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    getItemById: async (req, res) => {
        try {
            const customerId = req.params._id;
            const productId = req.params.item_id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const item = customer.cart.id(productId);
            if (!item) {
                return res.status(404).json({ message: 'Item not found in Cart' });
            }

            res.status(200).json({ item });
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    addItem: async (req, res) => {
        try {
            const customerId = req.params._id;
            const productId = req.body.PRODUCT_ID;
            const quantity = req.body.quantity;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const item = {
                productId,
                quantity,
            };

            customer.cart.push(item);

            await customer.save();

            res.status(200).json({ cart: customer.cart });
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    removeItem: async (req, res) => {
        try {
            const customerId = req.params._id;
            const productId = req.params.item_id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const item = customer.cart.id(productId);
            if (!item) {
                return res.status(404).json({ message: 'Item not found in Cart' });
            }

            // Remove the item from the cart
            const itemIndex = customer.cart.indexOf(item);
            if (itemIndex > -1) {
                customer.cart.splice(itemIndex, 1);
            }

            await customer.save();

            res.status(200).json({ item });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
};

module.exports = Cart;