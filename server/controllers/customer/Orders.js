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
            const customerId = req.params._id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const orders = customer.orders;

            res.status(200).json({ message: 'Found orders', orders });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getItemById: async (req, res) => {
        try {
            const customerId = req.params._id;
            const orderId = req.params.order_id;

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
            console.log(error);
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
                product: item,
                price: 150.00,
            };

            // Push the new order to the customer's orders array
            customer.orders.push(newOrder);

            // Save the updated customer object to the database
            await customer.save();

            res.status(201).json({ message: 'Order created successfully', orders: customer.orders });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    removeItem: async (req, res) => {
        try {
            const customerId = req.params._id;
            const orderId = req.params.order_id;

            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            const order = customer.orders.id(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            // Remove the item from the order
            const itemIndex = customer.orders.indexOf(order);
            if (itemIndex > -1) {
                customer.orders.splice(itemIndex, 1);
            }

            await customer.save();

            res.status(200).json({ message: 'Item removed from orders', orders: customer.orders });
        } catch (error) {
            console.error(error); // Log the error for debugging purposes
            res.status(500).json({ message: 'Internal server error' });
        }
    }

};

module.exports = Orders;