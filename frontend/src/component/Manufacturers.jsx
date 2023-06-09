import React from 'react'
import { useState, useEffect } from 'react';
import "./Manufacturers.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

let init = {
  name: "",
  year: "",
  price: "",
  colors: "",
  mileage: "",
  power: "",
  maxspeed: "",
};
const Manufacturers = () => {
  const [manufacturer, setManufacturer] = useState(init);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManufacturer({ ...manufacturer, [name]: value });
  };

  const { name, year, price, colors, mileage, power, maxspeed } = manufacturer;



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://attryb-peach.vercel.app/manufacturer/create", manufacturer)
      .then((res) => {
        getData();
        setManufacturer({ ...init });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // Get  
  const getData = () => {
    setLoader(true);
    axios
      .get("https://attryb-peach.vercel.app/manufacturer/get")
      .then((res) => {
        setData(res.data.getManufacs);
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const handleSearchfilter = (e)=>{
    let value = e.target.value;
    if(value.length != 0){
    axios.get(`https://attryb-peach.vercel.app/manufacturer/getSearch/${value}`)
      .then((res)=>{
        setData(res.data.search)
    })
    }
    else{
      getData();
    }
  }


  return (
    <>
    <div>
    <div className="manufacFormdiv">
        <h3>Manufacturers</h3>
        <form
         onSubmit={handleSubmit} 
         className="innerForm ">
          <div>
            <label>Name of model</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label> Year of Model</label>
            <br />
            <input
              type="text"
              name="year"
              placeholder="Model"
              value={year}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>price of the new vehicle</label>
            <br />
            <input

              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>available colors</label>
            <br />
            <input

              type="text"
              name="colors"
              placeholder="Colors"
              value={colors}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>mileage </label>
            <br />
            <input
              type="text"
              name="mileage"
              placeholder="Mileage"
              value={mileage}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Power (in BHP)</label>
            <br />
            <input

              type="text"
              name="power"
              placeholder="Power (in BHP)"
              value={power}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Max Speed</label>
            <br />
            <input
              type="name"
              name="maxspeed"
              placeholder="Max Speed"
              value={maxspeed}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <input className="manufacsubmit" type="submit" value="Add Manufacturers" />
        </form>
      </div>
      <div className='appendtable'>
        <div>
          <input type="text" placeholder='Search' id="" onChange={handleSearchfilter}/>
        </div>
       <table style={{marginTop: "1rem"}}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Colors</th>
                    <th>Mileage</th>
                    <th>Power</th>
                    <th>Max Speed</th>
                  </tr>
                </thead>

                {data.map((ele) => (
                  <tbody  key={ele._id}
                   >
                    <tr>
                      <td>{ele.name}</td>
                      <td>{ele.year}</td>
                      <td >{ele.price}</td>
                      <td >{ele.colors}</td>
                      <td >{ele.mileage}</td>
                      <td >{ele.power}</td>
                      <td >{ele.maxspeed}</td>
                    </tr>
                  </tbody>
                    
                ))}
              </table>

              </div>
    </div>
    </>
  )
}

export default Manufacturers