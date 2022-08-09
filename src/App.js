import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>Yammy</Logo>

      </Nav> */}
      <Search/>
       <Category/>
       <Pages />
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

// const Logo=styled(Link)`
//   text-decoration:none;
//   font-size:1.5rem;
//   font-weight:400;
//   font-family:'Lobster Two',cursive;
// `
// const Nav=styled.div`
//   padding:4rem 20%;
//   display:flex;
//   justify-content:flex-start;
//   align-items:center;

//   svg{
//     font-size:2rem;
//     color:orange;
//   }
// `
export default App;
