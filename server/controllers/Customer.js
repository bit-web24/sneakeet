const { Cart } = require('./customer/Cart');
const { Orders } = require('./customer/Orders');
const { Favorites } = require('./customer/Favorites');
const { Profile } = require('./customer/Profile');

const Customer = {
    cart: Cart,
    favorites: Favorites,
    orders: Orders,
    profile: Profile
};

module.exports = Customer;