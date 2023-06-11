import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/create", form)
      .then((res) => {
        getData();
        setForm({ ...init });
      })
      .catch((err) => {
        console.log(err);
      });
  };

   // Get  
   const getData = () => {
    // setLoader(true);
    axios
      .get("https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/get")
      .then((res) => {
        setproductData(res.data.getProducts);
        // setLoader(false);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const handlePrice = (e) =>{
    const value = e.target.value
    console.log(value);
    if(value == ""){
      getData()
    }
    else{
      axios.get(`https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/filter/${value}`)
      .then((res)=>{
          setproductData(res.data.filter)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  const handleColor = (e) =>{
    const value = e.target.value
    console.log(value);
    if(value == ""){
      getData()
    }
    else{
      axios.get(`https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/filtercolor/${value}`)
      .then((res)=>{
          setproductData(res.data.filterColors)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  const handlemileage = (e) =>{
    const value = e.target.value
    console.log(value);
    if(value == ""){
      getData()
    }
    else{
      axios.get(`https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/filtermileage/${value}`)
      .then((res)=>{
          setproductData(res.data.filtermileage)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  // Honda city ZX	 14.7 Blue 15kmp
  const handleDelete = (id) =>{
    axios.delete(`https://attryb-mwcpnhmbg-niteshrawat0401-gmailcom.vercel.app/product/removecar/${id}`)
    .then((res)=>{
      console.log(res.data.deleteCar);
      getData()
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    <div>
         <div className="manufacFormdiv">
        <h3>Product</h3>
        <form
         onSubmit={handleSubmit} 
         className="innerForm ">
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="productName"
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
              type="text"
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
      <div className='appendtable'>
        <div className='filter_div'>
          <div>
          <select onChange={handlePrice}>
          <option value="">Price</option>
          <option value="50">50</option>
          <option value="14.7">14.7</option>
        </select>
          </div>
          <div>
          <select onChange={handleColor}>
          <option value="">Colors</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
        </select>
          </div>
          <div>
          <select onChange={handlemileage}>
          <option value="">Mileage</option>
          <option value="18kmp">18kmp</option>
          <option value="15kmp">15kmp</option>
        </select>
          </div>
        </div>
       
       <table style={{marginTop: "1rem"}}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Colors</th>
                    <th>Mileage</th>
                    <th>Max Speed</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                {productdata.map((ele) => (
                  <tbody  key={ele._id}
                   >
                    <tr>
                      <td>{ele.productName}</td>
                      <td >{ele.price}</td>
                      <td >{ele.colors}</td>
                      <td >{ele.mileage}</td>
                      <td >{ele.maxspeed}</td>
                      <td style={{cursor: 'pointer'}} onClick={()=>handleDelete(ele._id)}>Delete</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              </div>
    </div>
    </>
  )
}

export default Productdealer