const { model, Schema } = require("mongoose");

const manufactureSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  year: {
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
  power: {
    type: String,
    required : true
  },
  maxspeed: {
    type: String,
    required : true
  },
});

const Manufac = model("manufacture", manufactureSchema);
module.exports = Manufac;