import{FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks,GiChickenLeg,GiBowlOfRice} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from 'react';
import "./category.css";
function Category() {
  return (
    <div className="LIST">
        <NavLink to={'/cuisine/Italian'} className="navbar active">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'} className="navbar">
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className="navbar">
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Indian'} className="navbar">
            <GiBowlOfRice/>
            <h4>Indian</h4>
        </NavLink>
      
    </div>
  )
}


export default Category
