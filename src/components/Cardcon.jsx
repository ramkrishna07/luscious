import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
// import Card from '@mui/material/Card';
import { NavLink } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import Typography from '@mui/material/Typography';
// import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io';
// import { CardActionArea } from '@mui/material';
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import "./cardon.css";

function Cardcon() {

  const [cardRecipes,SetcardRecipes]=useState([]);
  useEffect(()=>{
    getCardcon();
  },[]);
  const getCardcon=async()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=chicken`);
    const data=await api.json();
    SetcardRecipes(data.recipes);
  };


  return (
    <>
       <div className='cardheader'>
         <GiForkKnifeSpoon/>
         <div className='heading'>
           <h1>Trending Recipes</h1>
         </div>
         <div className='list'>
         <Splide aria-label="My Favorite Images"
         options={{
           perPage:5,
           arrows:false,
           pagination:false,
           type:'loop',
           gap:"2rem",
          rewind:true,
         }}>
           <div className='carusol'>
            <SplideSlide>
    <NavLink to={'/searched/cookie'}>
             <img src="https://www.livewellbakeoften.com/wp-content/uploads/2020/08/Small-Batch-Chocolate-Chip-Cookies-4s.jpg" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/ice cream'}>
             <img src="https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/salad'}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcA7GKxI1tf45NYOmIsSycMNUOy3z2qSdeWlvkw4j_yTXBAqtla2ooJRkNV3tg6qpQ20&usqp=CAU" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/pizza'}>
             <img src="https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/soups'}>
             <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/hot-and-sour-soup.jpg?quality=82&strip=all" alt="" />
             
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/bbq'}>
             <img src="https://freedesignfile.com/upload/2017/08/Delicious-charcoal-grilled-lamb-Stock-Photo-13.jpg" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/chocolate'}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRnF6ZqJocZ0xkNYEE2wELDobJWILisBZ5Q&usqp=CAU" alt="" />
           </NavLink>
    </SplideSlide>
    <SplideSlide>
    <NavLink to={'/searched/snacks'}>
             <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F03%2F22%2Fsnacking-personality-FT-BLOG0322.jpg" alt="" />
           </NavLink> 
    </SplideSlide>
    </div>
         </Splide>
         </div>
       </div>

          <Div>
       <div className='cardimage'>
          <img src="/assets/food-card.jpg" alt="" />
       </div>
    <div className='grid'>
              
        {cardRecipes.map((recipe)=>{
          return(
              <div key={recipe.id} className="cardaction">
              <NavLink to={"/recipe/"+recipe.id}><img src={recipe.image} alt="" /></NavLink>
              <h4>{recipe.title}</h4>
           
            </div>
          );
        })}
      
    </div>
   
    </Div>
    </>
  )
}
// const Carusol=styled.div`
//   display:flex;
//   width:35rem;
// `
// const Heading=styled.div`
//   color:white;
//   // background-color:red;
//   position:relative;
//   left:10%;
//      h1{
//       margin-top:15%;
//       font-family:'Lobster Two',cursive;
//       font-size:3rem;
//      }

// `;
// const NavLink=styled(NavLink)`
//   // display:flex;
//   // position:relative;
//   // left:50%;
//   // // flex-direction:column;
//   // // justify-content:right;
//   // // align-items:right;
//   // border:1px solid orange;
//   // border-radius:50%;
//   // // margin-left:1rem;
//   // text-decoration:none;
//   // width:6rem;
//   // height:6rem;
//   // cursor:pointer;
//   // transform:scale(0.8);
//   // overflow:hidden;

//       img{
//         width:6rem;
//         height:6rem;
//         border-radius:50%;
//         object-fit:cover;
//       }
// `;
// const List=styled.div`
//   position:relative;
//   left:20%;
//   top:20%;
//   display:flex;
// //  justify-content:center;
// //  margin:2rem 0rem;
// //  align-content:right;
// `;
// const Button=styled.div`
//   margin:20px;
// `;
const Div =styled.div`
  display:flex;
  
`;
// const Grid=styled.div`
//    display:grid;
//    grid-template-columns:repeat(auto-fit, minmax(25rem,2fr));
//    grid-gap:3rem;
//    align-item:center;
//    padding-left:5%;
//    padding-top:2rem;
//    width:63%;
//    overflow-y:scroll;
//    height:700px;
//    border:2px solid gray;
// `;
// const CardHeader=styled.div` 
//    display:flex;
//    background-color:black;
//    width:100%;
//    height:12rem;
//    margin:2rem 0 0rem 0;
       
//       svg{
//         color:orange;
//         font-size:4rem;
//         position:relative;
//         left:8%;
//         top:30%;
//       }
// `;
// const Cardimage=styled.div`
//   width:37%;
//   height:700px;
  
//      img{
//        width:100%;
//        height:100%;
//      }
// `;
// const CardAction=styled.div`
//   img{
//     width:80%;
//     border-radius:2rem;

// }
// `;
export default Cardcon
