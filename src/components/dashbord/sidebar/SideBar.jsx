import React, { useEffect, useRef } from 'react';
import { BiUser } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from 'react-icons/fa';
import "./sidebar.css";
import Dashboard from './dashboard/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Package from '../Package/Package';
import Withdraw from '../withdraw/Withdraw';
import Downlines from '../downlines/Downlines';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../app/actions/authSlice';
import { useState } from 'react';
import { useLayoutEffect } from 'react';



const SideBar = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [userDetails, setUserDetails] = useState(null);
    const {user, isLoading, isError, isSuccess} = useSelector(state => state.auth);


    useEffect(() => {

        if (isError){
            navigate("/login")
        }
        if (isSuccess && user){
            setUserDetails(user)
        } 
    }, [user, isError, isSuccess,  dispatch, navigate])

    useLayoutEffect(() => {
        dispatch(getUser());
    }, [dispatch]) 

    const toggleSidebar = (e) => {
        // ref.current.classList.toggle("active");
        const element = document.getElementById("sidebar")
        element.classList.toggle("active");
    }
    const getuserName = () => {
        const username = (userDetails) ? userDetails.first_name : "";
        return username;
    } 
  return (
    <>
       <div className="wrapper">
            {/* <!-- Sidebar Holder --> */}
            <nav ref={ref} id="sidebar">
                <div className="sidebar-header">
                    <h3>{getuserName()}</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="/user" aria-expanded="false">Dashboard</a>
                    </li>
                    <li>
                        <a href="/user/packages">Packages</a>
                    </li>
                    <li>
                        <a href="/user/withdraw">Withdrawal</a>
                    </li>
                    <li>
                        <a href="/user/referral">Downlines</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>

            <div id="content">

                <nav className="navbar navbar-default">
                    <div className="container-fluid container">

                        <div className="navbar-header">
                            <RiMenu2Fill onClick={(e) => toggleSidebar(e)} className="menu glyphicon glyphicon-align-left" />
                            <div>Hello {getuserName()}</div>
                        </div>

                        <div className='user_ctr'>
                            <IoNotificationsOutline />
                            <FaRegUserCircle />
                        </div>
                    </div>     
                </nav>

                {/* Different section */}
                <Routes>
                    <Route path='/' element={<Dashboard />}/>
                    <Route path='/packages' element={<Package />} />
                    <Route path='/withdraw' element={<Withdraw />} />
                    <Route path='/referral' element={<Downlines />} />
                </Routes>
                
            </div>
        </div>
    </>
  )
}

export default SideBar