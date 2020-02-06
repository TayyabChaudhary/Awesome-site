import React from 'react';
import './style.scss'
export default()=> {
  return (
    <div>
    <header class="header">
    <div className="container">
  <a href="./section1.js" class="logo"><span className="has-text-primary has-text-weight-bold is-size-4">WEB</span>AGENCY</a>
  </div>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">HOME</a></li>
    <li><a href="#careers">About</a></li>
    <li><a href="#about">WE BULID WEBSITE</a></li>
    <li><a href="#careers">Services</a></li>
    <li><a href="#careers">THAT DELIVER RESULT</a></li>
    <li><a href="#careers">LogIn</a></li>
    <li><a href="#careers">SignUp</a></li>
  </ul>
</header>
    </div>
  );
}
