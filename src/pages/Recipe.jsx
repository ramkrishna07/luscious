import { useState,useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'
import "./recipe.css";
function Recipe() {

  let params =useParams();

  const [details,setDetails]=useState({});
  const [activeTab,setActiveTab] =useState("instruction");
  const fetchDetails=async () =>{
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData=await data.json();
    setDetails(detailData);
    // console.log(detailData);
  };
  useEffect(()=>{
    fetchDetails();
  },[params.name]);
  return (
    <div className="DetailWrapper">
      <div className="DetailsLeft">
        <h2 style={{color:'black'}}>
          {details.title}</h2>
          <img src={details.image} alt="" />
      </div>
      <div className="DetailsRight">
        <div className="btn-container">
        <button id="Buton" className={activeTab==='instructions' ? 'active' : ''} onClick={()=> setActiveTab("instructions")}>Instruction</button>
        <button id="Buton" className={activeTab==='ingridients' ? 'active' : ''} onClick={()=> setActiveTab("ingridients")}>Ingredients</button>
        </div>
        {activeTab === "instructions" && (
          <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3>
          </div>
        )} 
        {activeTab === "ingridients" && (
           <ul style={{display:"block"}}>
           {details.extendedIngredients.map((ingredient)=>(
             <li key={ingredient.id}>{ingredient.original}</li>
           ))}
         </ul>
        )}
        
      </div>
    </div>
  )

}

// const DetailWrapper = styled.div`
//    width:100%;
//    display:flex;
//    margin-top:10rem;
//    margin-bottom:5rem;
//    padding:0 15%;
//    .active{
//         //  background:linear-gradient(to right,#f27121,#e94057);
//         background-color:orange;
//         color:white;
//         border:none;
//        }
     

// `;
// const DetailsLeft=styled.div`
//   width:50%;

//   h2{
//      margin-bottom:2rem;
//    }
//   img{
//     width:30rem;
//   }
// `;
// const DetailsRight=styled.div`
//   width:50%;

//   h3{
//     font-size:medium;
//   }
//   li{
//     font-size:1.2rem;
//     line-height:2.5rem;
//     font-weight:bold;
//   }
//   ul{
//     margin-top:2rem;
//   }
// `;

// const Button=styled.button`
//    padding:1rem 2rem;
//    color:#313131;
//    background:white;
//    border:2px solid black;
//    margin-right:2rem;
//    font-weight:600;
//    height:3rem;
//    cursor:pointer;
// `;
// const DetailWrapper = styled.div`
//    margin-top:10rem;
//    margin-bottom:5rem;
//    display:flex;
//    .active{
//     background:linear-gradient(35deg,#494949,#313131);
//     color:white;
//    }
//    h2{
//      margin-bottom:2rem;
//    }
//    li{
//      font-size:1.2rem;
//      line-height:2.5rem;
//    }
//    ul{
//      margin-top:2rem;
//    }
// `;

// const Button=styled.Button`
//    padding:1rem 2rem;
//    color:#313131;
//    background:white;
//    border:2px solid black;
//   //  margin-right:2rem;
//    font-weight:600;
//    height:3rem;
//    cursor:pointer;
// `;

// const Info=styled.div`
   
//    display:flex;
//    margin-left:10rem;
// `;

export default Recipe
