import React, { useEffect, useRef } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from 'react-icons/fa';
import "./sidebar.css";
import Dashboard from './dashboard/Dashboard';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Package from '../Package/Package';
import Withdraw from '../withdraw/Withdraw';
import Downlines from '../downlines/Downlines';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../app/actions/authSlice';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Home from "../admin/Home/Home";
import Loading from '../../loading/Loading';



const SideBar = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const lastelement = splitLocation.length - 1

    const [userDetails, setUserDetails] = useState(null);
    const {user, isLoading, isError, isSuccess} = useSelector(state => state.auth);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {

        if (isError){
            navigate("/login")
        }
        if (isSuccess && user){
            setUserDetails(user)
            if (user.is_admin) {
                setIsAdmin(true);
            }
        } 
    }, [user, isError, isSuccess,  dispatch, navigate])

    useLayoutEffect(() => {
        dispatch(getUser());
    }, [dispatch]) 

    const toggleSidebar = (e) => {
        const element = document.getElementById("sidebar")
        element.classList.toggle("active");
    }
    const getuserName = () => {
        const username = (userDetails) ? userDetails.first_name : "";
        return username;
    }
    const username = (userDetails) ? `${userDetails.first_name} ${userDetails.last_name}` : "";
    
  return (
    <>
       <div className="wrapper">
            {/* <!-- Sidebar Holder --> */}
            <nav ref={ref} id="sidebar">
                <div className="sidebar-header">
                    <h3>{getuserName()}</h3>
                </div>

                {
                    (isAdmin) ? (
                        <ul className="list-unstyled components">
                            <li className="active">
                                <span onClick={e => navigate("/user")} aria-expanded="false">Dashboard</span>
                            </li>
                            
                            <li>
                                <span onClick={e => navigate("/user/packages")} >Users</span>
                            </li>
                            <li>
                                <a href="/user/withdraw">Deposits</a>
                            </li>
                            <li>
                                <a href="/user/referral">Withdrawals</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="list-unstyled components">
                            <li className= { splitLocation[lastelement] === "user"? "active" : ""}>
                                <span onClick={e => navigate("/user")} aria-expanded="false">Dashboard</span>
                            </li>
                            <li className={ splitLocation[lastelement] === "packages" ? "active" : ""}>
                                <span onClick={e => navigate("/user/packages")} aria-expanded="false">Packages</span>
                            </li>
                            <li className={ splitLocation[lastelement] === "withdraw" ? "active" : ""}>
                                <span onClick={e => navigate("/user/withdraw")}>Withdrawal</span>
                            </li>
                            <li className={ splitLocation[lastelement] === "referral" ? "active" : ""}>
                                <span onClick={e => navigate("/user/referral")}>Downlines</span>
                            </li>
                            <li className={ splitLocation[lastelement] === "profile" ? "active" : ""}>
                                <span onClick={e => navigate("/user/profile")}>Profile</span>
                            </li>
                        </ul>
                    ) 
                }
            </nav>

            <div id="content">

                <nav className="navbar navbar-default">
                    <div className="container-fluid container">

                        <div className="navbar-header">
                            <RiMenu2Fill onClick={(e) => toggleSidebar(e)} className="menu glyphicon glyphicon-align-left" />
                            <div> {getuserName() !== "" ? `Hello ${getuserName()}`: "" }</div>
                        </div>

                        <div className='user_ctr'>
                            <IoNotificationsOutline />
                            <FaRegUserCircle />
                        </div>
                    </div>     
                </nav>

                {/* Different section */}
                {
                    
                    isLoading ? (
                            <Loading show={true} min_height={"80vh"} />
                        ): (
                            <Routes>
                                <Route path='/' element={<Dashboard username={username} />}/>
                                <Route path='/packages' element={<Package />} />
                                <Route path='/withdraw' element={<Withdraw />} />
                                <Route path='/referral' element={<Downlines />} />
                                <Route path="/" element={<Home />} />
                            </Routes>
                        )
                } 
                
                
            </div>
        </div>
    </>
  )
}

export default SideBar