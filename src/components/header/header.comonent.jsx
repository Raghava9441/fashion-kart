import React from "react";
import "./header.style.scss";
import Logo from '../../assets/logo1.svg'
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img width="100" src={Logo} alt="" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {
          currentUser ?
            <div className = "option" onClick ={()=>auth.signOut()}>signOut</div>
            :
            <Link className = "option" to = './signin'>sinIn</Link>
        }
      </div>
    </div>
  );
};

export default Header;
