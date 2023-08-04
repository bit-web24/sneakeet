const Orders = require('./customer/Orders');
const Favorites = require('./customer/Favorites');
const Profile  = require('./customer/Profile');

const Customer = {
    favorites: Favorites,
    orders: Orders,
    profile: Profile
};

module.exports = Customer;