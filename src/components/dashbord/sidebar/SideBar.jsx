import React, { useEffect, useRef } from 'react';
import { BiUser } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from 'react-icons/fa';
import "./sidebar.css";
import Dashboard from './dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Package from '../Package/Package';
import Withdraw from '../withdraw/Withdraw';
import Downlines from '../downlines/Downlines';



const SideBar = () => {
    const ref = useRef(null);
    const toggleSidebar = (e) => {
        // ref.current.classList.toggle("active");
        const element = document.getElementById("sidebar")
        element.classList.toggle("active");
    }
  return (
    <>
       <div className="wrapper">
            {/* <!-- Sidebar Holder --> */}
            <nav ref={ref} id="sidebar">
                <div className="sidebar-header">
                    <h3>UserName</h3>
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
                            <div>Hello Akorede Olaide</div>
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