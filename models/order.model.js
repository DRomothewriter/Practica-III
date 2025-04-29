const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: Number
    }],
    subtotal: Number,
    tax: Number,
    total: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);

/*
{
  
  "userId":"68106157f6e8cfe4e0106d23",
  "shippingAddress": {
      "street": "123 Calle Principal",
      "city": "Ciudad",
      "state": "Estado",
      "zip": "12345",
      "country": "País"
  },
  "items":[{
    "product":"68104e66a35e24813034f374",
    "quantity":5
  }]
}
   */




