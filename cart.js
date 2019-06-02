const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function (car) {
    this.cart.push(car)
    this.total += car.price
  },

  removeFromCart: function () {

  },

  checkout: function () {

  }
};