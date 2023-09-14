// CustomerManagement.js
import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const CustomerManagement = () => {
  return (
    <div className="customer-management">
      <Topbar />
      <div className="content">
        <Sidebar />
        <h2>Customer Management Content</h2><Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>

      </div>
    </div>
  );
};

export default CustomerManagement;
