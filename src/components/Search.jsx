import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {BsHeart} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import"./search.css";

function Search() {

    const [input,setInput]=useState("");

    const navigate=useNavigate();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+input);
    };
  return (
      <div className='Div'>
        <div className='nav'>
        <GiKnifeFork/>
        <Logo to={"/"}>Luscious</Logo>

        </div>
          <form onSubmit={submitHandler} className='formstyle'>
       <div className="form">
           <FaSearch></FaSearch>
         <input 
           onChange={(e) => setInput(e.target.value)}
           type="text"
           value={input} 
           placeholder="Search for your Fav"/>
       </div>
      
   </form>
   <div className='signup'>
   <div className='heart'>
     <BsHeart/>
   </div>
   <div className='BTN'>
     <button className='Btn'>SIGN UP</button>
   </div>
   </div>
 
    </div>
   
  )
}


const Logo=styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two',cursive;
  color:white;
`;


export default Search
