const Customer = require('../models/Customer');

const Profile = {
  getDetails: async (req, res) => {
    try {
      // Retrieve the customer ID from the request
      const customerId = req.params.customerId;

      // Find the customer by ID
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }

      // Respond with the customer details
      res.status(200).json({ customer });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateDetails: async (req, res) => {
    try {
      // Retrieve the customer ID from the request
      const customerId = req.params.customerId;

      // Find the customer by ID
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }

      // Update the customer details
      customer.email = req.body.customer.email || customer.email;
      customer.password = req.body.customer.password || customer.password;
      customer.phone = req.body.customer.phone || customer.phone;
      customer.address = req.body.customer.address || customer.address;
      customer.updatedAt = Date.now();

      // Save the updated customer to the database
      await customer.save();

      // Respond with a success message and the updated customer details
      res.status(200).json({ message: 'Customer details updated', customer });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = Profile;
