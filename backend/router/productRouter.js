const {Router} = require("express")
const Product = require('../model//productdealer');

const productsrouter = Router();

// Post product
productsrouter.post("/create", async(req, res)=>{
  let { productName, price, colors, mileage, power, maxspeed} = req.body;
  let isUniqueName = (await Product.countDocuments({ productName}) > 0 ? true : false)
  if(isUniqueName){
    return res.status(400).json({msg: "Email alredy present", isUniqueName})
  }

  let createProduct = await Product.create({
    productName, price, colors, mileage, power, maxspeed,
  },)

  try {
    if(createProduct){
      return res.status(201).json({ msg: "Product succssfully created", createProduct})
    }
  } catch (error) {
    return res.status(500).json({ msg: "Try again latter", error})
  }
})

// Get product
productsrouter.get("/get", async(req, res)=>{
  let getProducts = await Product.find({});
  try {
    if(getProducts){
      return res.status(200).json({ msg: "Successfully Product get", getProducts})
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error})
  }
})

// -----Filter-----
productsrouter.get("/filter/:key", async (req, res) => {
    let filter = await Product.find({
      $or: [
        {
          price: req.params.key,
        },
      ],
    });
    try {
      if (filter) {
        return res
          .status(201)
          .send({ sucess: true, message: "Filter data", filter });
      }
    } catch (error) {
      return res.send({ sucess: false, error });
    }
  });

productsrouter.get("/filtercolor/:key", async (req, res) => {
    let filterColors = await Product.find({
      $or: [
        {
            colors: req.params.key,
        },
      ],
    });
    try {
      if (filterColors) {
        return res
          .status(201)
          .send({ sucess: true, message: "filterColors data", filterColors });
      }
    } catch (error) {
      return res.send({ sucess: false, error });
    }
  });

productsrouter.get("/filtermileage/:key", async (req, res) => {
    let filtermileage = await Product.find({
      $or: [
        {
            mileage: req.params.key,
        },
      ],
    });
    try {
      if (filtermileage) {
        return res
          .status(201)
          .send({ sucess: true, message: "Mileage data", filtermileage });
      }
    } catch (error) {
      return res.send({ sucess: false, error });
    }
  });

  // Delete
  productsrouter.delete("/removecar/:id", async (req, res) => {
    const { id } = req.params;
    const deleteCar = await Product.deleteOne({ _id: id });
    try {
      if (deleteCar) {
        return res.status(201).send({ msg: "Sucessfully deleted", deleteCar });
      }
      return res.status(400).send({ msg: "Something wrong" });
    } catch (error) {
      return res.status(500).send({ msg: "Error occured while deleting" });
    }
  })


module.exports = productsrouter