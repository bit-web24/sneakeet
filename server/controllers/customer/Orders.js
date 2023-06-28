const Customer = require('../../models/Customer');

const Orders = {
    getAllItems: async (req, res) => {
        try {
            const { customerId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const orders = customer.orders;

            res.status(200).json({ orders });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getItemById: async (req, res) => {
        try {
            const { customerId, orderId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const order = customer.orders.id(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            res.status(200).json({ order });
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

            customer.orders.push(item);

            await customer.save();

            res.status(200).json({ message: 'Item added to orders', orders: customer.orders });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    removeItem: async (req, res) => {
        try {
            const { customerId, orderId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const order = customer.orders.id(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            order.remove();

            await customer.save();

            res.status(200).json({ message: 'Item removed from orders', orders: customer.orders });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = Orders;