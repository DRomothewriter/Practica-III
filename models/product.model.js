const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    category: { type: String, required: true }

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
/*{
    "name":"Pluma",
    "description":"Bic azul",
    "price": 20,
    "stock":100,
    "category":"school"
  }
      "email":"diego@gmail.com",
  "password":"diego"
  */