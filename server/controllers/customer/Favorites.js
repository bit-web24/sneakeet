const Customer = require('../../models/Customer');

const Favorites = {
    getAllItems: async (req, res) => {
        try {
            const customerId = req.params._id;

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
            const customerId = req.params._id;
            const productId = req.params.favorite_id;

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
            const customerId = req.params._id;
            const productId  = req.body.PRODUCT_ID;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            customer.favorites.push({
                favoriteProduct: productId
            });

            await customer.save();

            res.status(200).json({ message: 'Item added to favorites', favorites: customer.favorites });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    removeItem: async (req, res) => {
        try {
            const customerId = req.params._id;
            const productId = req.params.favorite_id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const favorite = customer.favorites.id(productId);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }

            // Remove the item from the order
            const itemIndex = customer.favorites.indexOf(favorite);
            if (itemIndex > -1) {
                customer.favorites.splice(itemIndex, 1);
            }

            await customer.save();

            res.status(200).json({ message: 'Item removed from favorites', favorites: customer.favorites });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = Favorites;