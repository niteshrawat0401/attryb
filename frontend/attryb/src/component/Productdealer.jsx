import React from 'react'
import { useState, useEffect } from 'react';

let init = {
    productName: "",
    price: "",
    colors: "",
    mileage: "",
    maxspeed: "",
  };
const Productdealer = () => {
    const [form, setForm] = useState(init);
    const [productdata, setproductData] = useState([]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { productName, price, colors, mileage, maxspeed } = form;

  return (
    <>
    <div>
         <div className="manufacFormdiv">
        <h3>Product</h3>
        <form
        //  onSubmit={handleSubmit} 
         className="innerForm ">
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={productName}
              onChange={handleChange}
              required
            />
          </div>
            <br />
          <div>
            <label>Price</label>
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
            <label>Colors</label>
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
            <label>Max Speed</label>
            <br />
            <input
              type="number"
              name="maxspeed"
              placeholder="Max Speed"
              value={maxspeed}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <input className="manufacsubmit" type="submit" value="Add car" />
        </form>
      </div>
    </div>
    </>
  )
}

export default Productdealer