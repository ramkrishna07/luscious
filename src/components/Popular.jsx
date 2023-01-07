import React, { useEffect,useState } from 'react'
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import "./popular.css";

function Popular() {
    // in this useEffect we passes an function and an empty array that's 
    // why it runs only on first render

    const [popular,setPopular]=useState([]);
    useEffect(()=>{
        getPopular();
    },[]);
    const getPopular = async () =>{
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
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data=await api.json();

      // localStorage.setItem("popular",JSON.stringify(data.recipes));
      setPopular(data.recipes);
     
    };
  return (
   
            <div className='main'>
              <h3>Popular Picks</h3>
              <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "3rem",
                breakpoints: {
                  1130: {
                    gap:"2rem",
                  },
                  1040:{
                    perPage:3,
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
              {popular.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                  <div className='card'>
                    <Link to={"/recipe/"+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className='gradient'/>
                    </Link>
                  </div>
                  </SplideSlide>
                );
              })}
              </Splide>
            </div>
       
     
   
  )
}

export default Popular
