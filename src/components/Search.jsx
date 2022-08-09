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
       <div  className="form">
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

// const Div=styled.div`
//   display:flex;
//   background-color:black;
// `
// const form =styled.form`
  //  margin:auto;
  //  position:relative;
  //  right:0%;
  //  padding:0%;

  //  div{
  //      width:100%;
  //      position:relative;
  //  }
  //  input{
  //   font-size:1.5rem;
  //   color:gray;
  //   padding:1rem 16rem 1rem 4rem;
  //   border:none;
  //   border-radius:1rem;
  //   outline:none;
  //   width:100%;
  //  }
   
//    svg{
//        position:absolute;
//        top:50%;
//        left:0%;
//        transform:translate(100%,-50%);
//        color:black;
      
//    }

// `

const Logo=styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two',cursive;
  color:white;
`;
// const Nav=styled.div`
//   padding:4rem 0% 4rem 10%;
//   display:flex;
//   justify-content:flex-start;
//   align-items:center;

//   svg{
//     font-size:4rem;
//     color:orange;
//   }
// `;
// const Button=styled.button`
// width: 100px;
// border: none;
// padding: 10px;
// border-radius: 5px;
// font-weight: 500;
// cursor: pointer;
// margin:5rem 12rem 4rem 0;
// background-color:orange;
// color:black;
// font-weight:bold;
// `;
// const Heart=styled.div`
//   padding:5rem 2rem 4rem 0rem;
//   font-size:2rem;
//   color:white;
// `

export default Search
