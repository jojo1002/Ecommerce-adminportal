import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Topbar.css';

const Topbar = ({ handleLogout }) => {
  return (
    <div className="topbar">
      <div className="logo">
      <a className="logo-a">S</a>
        <a className="logo-b">c</a>
        <a className="logo-c">o</a>
        <a className="logo-d">o</a>
        <a className="logo-e">p</a>
      </div>
      <h2>Welcome to the Dashboard</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
};

export default Topbar;