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

// const List=styled.div`
//     display:flex;
//     justify-content:center;
//     margin:2rem 0rem;
// `;

// const SLink  = styled(NavLink)`
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     border-radius:50%;
//     margin-right:2rem;
//     text-decoration:none;
//     background:linear-gradient(35deg,#494949,#313131);
//     width:6rem;
//     height:6rem;
//     cursor:pointer;
//     transform:scale(0.8);

//     h4{
//         color:white;
//         font-size:0.8rem;
//     }
//     svg{
//         color:orange;
//         font-size:1.5rem;
//     }
//     &.active{
//         background:linear-gradient(35deg,#090909,#0a0a0a);
//         // width:5rem;
//         // height:5rem;
       
//     }
// `

export default Category
