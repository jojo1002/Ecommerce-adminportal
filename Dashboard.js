import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Dashboard.css';

const Dashboard = ({ setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="dashboard">
      <Topbar handleLogout={handleLogout} />
      
       <div className="content">
       <Sidebar />
      </div> 
      
    </div>
    
  );
};

export default Dashboard;