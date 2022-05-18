import "./Head.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Head = () => {
  const showNav = (id, classes) => {
    const NavElement = document.getElementById(id)
      NavElement.classList.add(classes);
  }
  const closeNav = (id, classes) => {
    const NavElement = document.getElementById(id)
      NavElement.classList.remove(classes)
  }
  return (
    <>
      <div className="top">
        <div className="head">
        <h2><Link to={"/"}>Trading Platform</Link></h2>
        </div>

        <AiOutlineMenu id="menu" onClick={(e) => showNav("navs", "show")} className="menu" />
        

        <div id="navs" className="nav head">

            <AiOutlineClose onClick={(e) => closeNav("navs", "show")} id="closeBtn" className="close" />

          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="/#packages">Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <div className="btns">
            <button className="btn"><Link to={"/login"}>Login</Link></button>
            <button className="btn"><Link to={"/signup"}>Register</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Head