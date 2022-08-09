import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';
import "./footer.css";
import {FaSearch,FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaCopyright} from 'react-icons/fa';
function Footer() {
  return (
     
    <div className='wrapper'>
      <hr />
      <section className="footer-navigation">
 <div className="row rows">
     <div className='footer-leftbar'>
         <div className='headingbar'>
             <div>
             <GiKnifeFork/>
             <Link className='Logo' to={"/"}>Luscious</Link>
             <br /> <br />
             </div>
             <div>
                 <h2>Ready to cook?</h2>
                 <br />
                 <h4>Sign up for our weekly newsletters!</h4>
             </div>
         </div>
        <div className='signupbar'>
         <form action="" className='searchbar'>
             <div>
             <FaSearch></FaSearch>
                 <input type="email" placeholder='Enter Your Email'/>
             </div>
         </form>
         <div className='btn'>
           <button className='Button'>SIGN UP</button>
         </div>
        </div>
        <div className='linkbar'>
        
        <ul>
        <h4>LET’S CONNECT!</h4>
            <li><a href="https://www.facebook.com/raj.saha.450" target="_blank"><FaFacebook/></a> </li>
            <li><a href="https://www.instagram.com/raj_saha_king/" target="_blank"><FaInstagram/> </a></li>
            <li><a href="https://github.com/ramkrishna07" target="_blank"><FaGithub/></a> </li>
            <li> <a href="https://www.linkedin.com/in/ramkrishna-saha-334281214/" target="_blank"><FaLinkedin/></a> </li>
        </ul>
        </div>
         
     </div>
     
    <div className="columns">
      <h4 style={{ textAlign: "left" }}>HELPFULL LINKS</h4>
      <hr className="hr-tag" />
      <ul className='meals'>
         <li><Link to={"/searched/Gluten Free"} style={linkStyle}>Gluten Free</Link></li>
         <li><Link to={"/searched/Ketogenict"} style={linkStyle}>Ketogenic</Link></li>
         <li><Link to={"/searched/Vegan"} style={linkStyle}>Vegan</Link></li>
         <li><Link to={"/searched/Pescetarian"} style={linkStyle}>Pescetarian</Link></li>
         <li><Link to={"/searched/Paleo"} style={linkStyle}>Paleo</Link></li>
         <li><Link to={"/searched/Low FODMAP"} style={linkStyle}>Low FODMAP</Link></li>
      </ul>
      
    </div>
    <div className="columns">
      <h4 style={{ textAlign: "left" }}>QUICK MEALS</h4>
      <hr className="hr-tag" />
      <ul className='meals'>
         <li><Link to={"/searched/breakfast"} style={linkStyle}>Breakfast</Link></li>
         <li><Link to={"/searched/lunch"} style={linkStyle}>Lunch</Link></li>
         <li><Link to={"/searched/dinner"} style={linkStyle}>Dinner</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-copyright">
    <p>
     <FaCopyright/>
    </p>
  </div>
</section>

    </div>
  )
}

const Div=styled.div`
  background-color:black;
  padding:0 15%;
  
`;
const linkStyle = {
  textDecoration: "none",
  color: 'orange',
  
};
export default Footer
