import React from 'react';
import {Link} from "react-router";

export const Header = (props) => {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            <a className="navbar-brand"><span className="text-primary">ngSpotify</span></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to={"/home"} activeStyle={{color: "white"}}>Home</Link></li>
              <li><Link to={"/reddit"} activeStyle={{color: "white"}}>Reddit</Link></li>
              <li><Link to={"/about"} activeStyle={{color: "white"}}>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
