import React from "react";
import { Link } from 'react-router-dom';



const Nav = () => {


  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand colr" >
            <i className="fa fa-angellist"></i> &nbsp;
            Solution Finder
          </div>
          <ul className="listStyle">
            <li className="pad">
              <Link  className="licol" to='/home'>Home</Link>
              
            </li>
            <li className="pad">
              <Link className="licol" to='/tasks'>Tasks</Link>
            </li>
            <li className="pad">
             
              <Link className="licol" to='/solution'>Solution</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>


  )
}

export default Nav;