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


export default Recipe
