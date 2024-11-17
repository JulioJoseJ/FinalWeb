import React, { useState } from "react";
import './styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () =>{
  const [menu,setMenu] =useState("menu");
  
  return(
    <div className="navbar">
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</Link>
        <Link to="/Models" onClick={()=>setMenu("Models")} className={menu==="Models"?"active":""}>Models</Link>
        <Link to="/Products" onClick={()=>setMenu("Makeup-products")} className={menu==="Makeup-products"?"active":""}>Makeup products</Link>
        <Link to="/Events" onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}>Fashion events</Link>
        <Link to="/PhotoSale" onClick={()=>setMenu("Photo-sales")} className={menu==="Photo-sales"?"active":""}>Photo Sales</Link>
        <Link to="/Membership" onClick={()=>setMenu("Membership")} className={menu==="Membership"?"active":""}>MemberShips</Link>
      </ul>
      <div className = "navbar-right">
       <button className="navbar-button" >Admin?</button>
      </div>
    </div>
  )
}

export default Navbar