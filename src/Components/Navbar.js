import React from 'react'
import info from './images/info.png';
import code from './images/code.png';
import logo from './images/logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <div className='nav-main'>
      <a href="/" className="name"> <div className="logo"><img src={logo} alt="" height={40} width={40}/></div> Forest Fingers</a>
      <div className="navbar-items"><a className="navi" href="/info">Info<img className="info" src={info} alt="" height={20} width={20}/></a>
      <a className="navi" href="/info">Contribute<img className="contri" src={code} alt="" height={20} width={20}/></a>
      </div>
      </div>
  )
}

export default Navbar;
