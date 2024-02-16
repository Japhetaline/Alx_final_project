import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaHome, FaUser, FaUserGraduate,  FaUserTie,  FaTools  } from "react-icons/fa";

function Navbar() {
  return (
    <>
    <a id="nav-expand" href="#">
  <span class="icon icon-menu"></span>&nbsp;
  Menu
</a>
<nav>
  <a id="nav-collapse" href="#">
    <span class="icon icon-cross"></span>
  </a>
  
  <div className="side-menu">
          <Link to="/">
            <FaHome color='white'/>
            <span>Home</span>
          </Link>
        </div>

        <div className="side-menu">
          <Link to="/admin">
            <FaUser color='white'/>
            <span>Admin</span>
          </Link>
        </div>

        <div className="side-menu">
          <Link to="/student">
            <FaUserGraduate color='white' />
            <span>Student</span>
          </Link>
        </div>
  
        <div className="side-menu">
          <Link to="/teacher">
            <FaUserTie color='white'/>
            <span>Teacher</span>
          </Link>
        </div>

        <div className="side-menu">
          <Link to="/settings">
            <FaTools color='white'/>
            <span>Settings</span>
          </Link>
        </div>  
</nav>
</>
  )
}

export default Navbar