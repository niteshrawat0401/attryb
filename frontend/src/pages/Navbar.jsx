import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate()
  let pvtroute = JSON.parse(localStorage.getItem("pvtroute"))

  const logout = () =>{
    localStorage.removeItem("pvtroute")
    navigate("/")
  }

  return (
    <div className="nav_div">
      <div className="innerDiv py-4	">
        <h3 ><Link style={{color: 'white'}} to="/manufacture">Manufacturers</Link></h3>
        <p style={{ marginTop: '1.5rem'}} ><Link style={{color: 'white', marginTop: '5rem'}} to="/productdealer">Product Spec</Link></p>
        {pvtroute===null? (< Link to={"/"} style={{color: 'white', marginTop: '1.4rem'}} onClick={()=> navigate("/")}>Login </Link>):
        (<p style={{color: 'white'}} onClick={logout}>Logout <Link style={{color: 'white'}}>{pvtroute.userName}</Link></p>)}
      </div>
    </div>
  );
};