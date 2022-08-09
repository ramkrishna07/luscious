import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "./searched.css";

function Searched() {

    const [searchedRecipes,setSearchedRecipes]=useState([]);
    let params=useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
    useEffect(()=>{
        getSearched(params.search);
    },[params.search]);
  return (
    <div className='GRID'>
        {searchedRecipes.map((item)=>{
            return (
                <div className='CARD' key={item.id}>
                    <Link to={"/recipe/"+item.id}>
                    <img src={item.image} alt="" />
                    <h4 style={{color:'black'}}>{item.title}</h4>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}


const Grid=styled.div`
   display:grid;
   grid-template-columns:repeat(auto-fit, minmax(20rem,1fr));
   grid-gap:3rem;
   padding:0 15%;
`;
const Card =styled.div`
   img{
       width:80%;
       border-radius:2rem;
       align-items:center;
   }
   a{
       text-decoration: none;
   }
   h4{
       text-align: center;
       padding: 1rem;
   }
`

export default Searched
