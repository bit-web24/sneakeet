const Customer = require('../../models/Customer');
const pino = require('pino');

// const logger = pino({
//     prettyPrint: true,
//     level: 'info',
//     useLevelLabels: true, // Display log level names (INFO, WARN, etc.) instead of numbers
//   });  

const Orders = {
    getAllItems: async (req, res) => {
        try {
            const { customerId } = req.params;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const orders = customer.orders;

            res.status(200).json({ message: 'Fetching all orders', orders });
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
            const customerId = req.params._id;
            const item = req.body.PRODUCT_ID;

            console.log("CustomerId: ", customerId, "PRODUCT_ID: ", item);

            const customer = await Customer.findById(customerId);
            console.log(customer);

            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            // Create a new order object based on the orderSchema
            const newOrder = {
                orderNumber: 'ORD-001',
                products: item,
                totalAmount: 150.00,
            };

            // Push the new order to the customer's orders array
            customer.orders.push(newOrder);

            // Save the updated customer object to the database
            await customer.save();

            res.status(201).json({ message: 'Order created successfully', orders: customer.orders });
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