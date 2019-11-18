let products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  getProducts: function() { 
    return products;
  },

  getProduct: function(productId) {
    let product = products.find(function(p) { return p.id === productId; });
    return product;
  },
};