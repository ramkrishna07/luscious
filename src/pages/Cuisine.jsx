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

// const Grid=styled(motion.div)`
//    display:grid;
//    grid-template-columns:repeat(auto-fit, minmax(20rem,1fr));
//    grid-gap:3rem;
//    padding:0 15%;
// `;
// const Card =styled.div`
//    img{
//        width:80%;
//        border-radius:2rem;

//    }
//    a{
//        text-decoration: none;
//    }
//    h4{
//        text-align: center;
//        padding: 1rem;
//    }
// `
export default Cuisine
