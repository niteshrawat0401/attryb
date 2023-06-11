const { model, Schema } = require("mongoose");

const productDealerSchema = new Schema({
  productName: {
    type: String,
    required : true
  },
  price: {
    type: Number,
    required : true
  },
  colors: {
    type: String,
    required : true
  },
  mileage: {
    type: String,
    required : true
  },
  maxspeed: {
    type: String,
    required : true
  },
});

const Product = model("productDealer", productDealerSchema);
module.exports = Product;