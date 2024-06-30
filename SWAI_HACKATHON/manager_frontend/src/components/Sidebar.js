import React from "react";
import { NavLink } from "react-router-dom";
import '../sb-admin-2.css';


function Sidebar() {

  return (
    <div id="wrapper" style={{float: "left"}}>

      <ul className="sidebar" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
              <NavLink to='/' style={{color: "white"}}>Safe Walking</NavLink>
            </div>
        </a>

        <hr class="sidebar-divider my-0"></hr>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/' style={{color: "white"}}>Dashboard</NavLink>
        </a>
        </li>

        <hr class="sidebar-divider"></hr>

        <div class="sidebar-heading">
          User Data
        </div>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/users' style={{color: "white"}}>유저 개인 정보</NavLink>
        </a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/timers' style={{color: "white"}}>타이머 정보</NavLink>
        </a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/contacts' style={{color: "white"}}>비상연락망</NavLink>
        </a>
        </li>

        <hr class="sidebar-divider"></hr>

        <div class="sidebar-heading">
         App Data
        </div>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/reports' style={{color: "white"}}>민원 정보</NavLink>
        </a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <NavLink to='/logs' style={{color: "white"}}>위치 로그 정보</NavLink>
        </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;