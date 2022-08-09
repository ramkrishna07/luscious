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



// const Wrapper=styled.div`
//   padding:0% 15%;
//   margin: 4rem 0rem;
// `;
// const Card =styled.div`
//   min-height:15rem;
//   min-width:10rem;
//   border-radius:2rem;
//   overflow:hidden;
//   position:relative;
//   width:100%;
//   height:100%;
//   img{
//     border-radius:2rem;
//     object-fit:cover;
//     position:absolute;
//     left:0;
//     width:100%;
//     height:100%;
//   }
//   p{
//     position: absolute;
//     z-index: 10;
//     left: 50%;
//     bottom: 0%;
//     transform: translate(-50%,0%);
//     color: white;
//     width: 100%;
//     text-align: center;
//     font-weight: 600;
//     font-size: 1rem;
//     height: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// const Gradient=styled.div`
//     z-index:3;
//     position:absolute;
//     width:100%;
//     height:100%;
//     background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
// `
export default Popular
