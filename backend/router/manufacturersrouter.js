const {Router} = require("express")
const Manufac = require('../model/manufacturers');

const manufacturersrouter = Router();

// Post manufacturers
manufacturersrouter.post("/create", async(req, res)=>{
  let { name, year, price, colors, mileage, power, maxspeed} = req.body;
  let isUniqueName = (await Manufac.countDocuments({ name}) > 0 ? true : false)
  if(isUniqueName){
    return res.status(400).json({msg: "Email alredy present", isUniqueName})
  }

  let createManufac = await Manufac.create({
    name, year, price, colors, mileage, power, maxspeed,
  },)

  try {
    if(createManufac){
      return res.status(201).json({ msg: "Manufac succssfully created", createManufac})
    }
  } catch (error) {
    return res.status(500).json({ msg: "Try again latter", error})
  }
})

// Get manufacturers
manufacturersrouter.get("/get", async(req, res)=>{
  let getManufacs = await Manufac.find({});
  try {
    if(getManufacs){
      return res.status(200).json({ msg: "Successfully manufac get", getManufacs})
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error})
  }
})


// Serach
manufacturersrouter.get("/getSearch/:key", async(req, res)=>{
    let search = await Manufac.find({
      $or:[
        {
          name: { $regex: new RegExp("^"+req.params.key+".*"), $options: 'i' }
          // name: {$regex: req.params.key, $options: "i"}
        },
      ]
    })
    try {
      if(search){
        return res.status(200).json({ msg: "Data get successfully", search})
      }
    } catch (error) {
      return res.status(500).json({ msg: "error while searching", error})
    }
  })
  
module.exports = manufacturersrouter