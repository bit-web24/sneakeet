const Customer = require('../models/Customer');

const Favorites = {
    getAllItems: async (req, res) => {
        try {
            const { customerId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const favorites = customer.favorites;

            res.status(200).json({ favorites });
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

            const favorite = customer.favorites.id(productId);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }

            res.status(200).json({ favorite });
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

            customer.favorites.push(item);

            await customer.save();

            res.status(200).json({ message: 'Item added to favorites', favorites: customer.favorites });
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

            const favorite = customer.favorites.id(productId);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }

            favorite.remove();

            await customer.save();

            res.status(200).json({ message: 'Item removed from favorites', favorites: customer.favorites });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = Favorites;