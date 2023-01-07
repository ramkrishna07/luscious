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



export default App;
