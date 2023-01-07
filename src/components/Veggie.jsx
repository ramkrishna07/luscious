import React, { useEffect,useState } from 'react'
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { NavLink } from 'react-router-dom';
import "./veggie.css";

function Veggie() {

   // in this useEffect we passes an function and an empty array that's 
    // why it runs only on first render

    const [veggie,setVeggie]=useState([]);
    useEffect(()=>{
        getVeggie();
    },[]);
    const getVeggie = async () =>{
      // const check = localStorage.getItem("popular");

      // if(check){
      //   setPopular(JSON.parse(check));
      // }
      // else{
      //   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      //   const data=await api.json();

      //   localStorage.setItem("popular",JSON.stringify(data.recipes));
      //   setPopular(data.recipes);
      // }
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian,dessert`);
      const data=await api.json();

      // localStorage.setItem("popular",JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    };
  return (
    
    <div className='Wrapper'>
        <h3>Vegeterian Picks</h3>
        <div className='List'>
      <Splide options={{
         perPage: 3,
         arrows: false,
         pagination: false,
         drag: "free",
         gap: "3rem",
         type :'loop',
         breakpoints: {
           840:{
             gap:"2rem",
           },
           780:{
             gap:"1rem",
           },
           700: {
            perPage: 2,
            gap:"2rem",
            arrows: true,
           },
           500: {
            perPage: 1,
            gap:"3rem",
            arrows: true,
           },
          }
        }}>
        {veggie.map((recipe) => {
         return(
          <SplideSlide key={recipe.id}>
           <div className='card'>
             <NavLink to={"/recipe/"+recipe.id}> 
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className='Gradient'/>
             </NavLink>
           </div>
          </SplideSlide>
        );
       })}
       </Splide>
       </div>
     </div>


  )
}
new Splide()



export default Veggie
