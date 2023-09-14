// OrderManagement.js
import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const OrderManagement = () => {
  return (
    <div className="order-management">
      <Topbar />
      <div className="content">
        <Sidebar />
        <h2>Order Management Content</h2><Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
      </div>
    </div>
  );
};

export default OrderManagement;
