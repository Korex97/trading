import "./Head.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector} from "react-redux";
import { logout } from "../../app/actions/authSlice";
import { useEffect } from "react";



const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showNav = (id, classes) => {
    const NavElement = document.getElementById(id)
      NavElement.classList.add(classes);
  }
  const closeNav = (id, classes) => {
    const NavElement = document.getElementById(id)
      NavElement.classList.remove(classes)
  }

  const { user, isSuccess } = useSelector(state => state.auth);

  
    
  useEffect(() => {
    if (isSuccess && !user){
      navigate("/login")
    }
  }, [isSuccess, user, navigate]);

  
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
            <li onClick={(e) => {
                        navigate("/#");
                        closeNav("navs", "show")
                    }}>About Us</li>
            <li onClick={(e) => {
                        navigate("/#packages");
                        closeNav("navs", "show")
                    }}>Pricing</li>
            <li onClick={(e) => {
                        navigate("/#");
                        closeNav("navs", "show")
                    }}>Contact Us</li>
          </ul>

          <div className="btns">
              {
                user ? (
                  <button className="btn btn-primary" onClick={(e) => {
                    dispatch(logout());
                    closeNav("navs", "show")
                  }}>Logout</button>
                ) : (
                  <>
                    <button className="btn" onClick={(e) => {
                        navigate("/login");
                        closeNav("navs", "show")
                    }}>Login</button>
                    <button className="btn" onClick={(e) => {
                        navigate("/signup");
                        closeNav("navs", "show")
                    }}>Register</button>
                  </>
                )
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default Head