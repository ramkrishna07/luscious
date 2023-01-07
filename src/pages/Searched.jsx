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




export default Searched
