import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import {Link,useParams} from 'react-router-dom';
import "./cuisine.css";
function Cuisine() {

    const [cuisine,setCuisine]=useState([]);
    let params=useParams();
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(()=> {
        getCuisine(params.type);
    },[params.type]);
  return (
    <div className='grd'
       animate={{opacity: 1 }}
       initial={{opacity:0 }}
       exit={{opacity:0}}
       transition={{duration:0.5}}
       >
        {cuisine.map((item)=>{
            return(
                <div className='crd' key={item.id}>
                    <Link to={"/recipe/"+item.id}>
                    <img src={item.image} alt=""/>
                    <h4 style={{color:'black'}}>{item.title}</h4>
                    </Link>
                </div>
            );
        })}
    </div>
  )
}


export default Cuisine
