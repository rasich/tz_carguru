import React from 'react';
import {
  NavLink
} from "react-router-dom";

import './nav-block.css';


const NavBlock = () => {
  return (
    <nav className="nav">
      <NavLink 
        className="nav-link"
        activeClassName="nav-link__active"
        to='/1'
      >
        1 задание
      </NavLink>

      <NavLink 
        className="nav-link"
        activeClassName="nav-link__active"
        to='/2'
      >
        2 задание
      </NavLink>

      <NavLink 
        className="nav-link"
        activeClassName="nav-link__active"
        to='/3'
      >
        3 задание
      </NavLink>

      <NavLink 
        className="nav-link"
        activeClassName="nav-link__active"
        to='/4'
      >
        4 задание
      </NavLink>

      <NavLink 
        className="nav-link" 
        activeClassName="nav-link__active" 
        to='/5'>
        5 задание
      </NavLink>

    </nav>
  )
}

export default NavBlock;