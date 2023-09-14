import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import ProductManagement from './components/DashboardContent/ProductManagement'; // Import your ProductManagement component
import OrderManagement from './components/DashboardContent/OrderManagement'; // Import your OrderManagement component
import CustomerManagement from './components/DashboardContent/CustomerManagement'; // Import your CustomerManagement component
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}
          />
          <Route path="/dashboard" element={loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Navigate to="/" />} />
          <Route path="/dashboard/products" element={<ProductManagement />} /> {/* Include your ProductManagement component */}
          <Route path="/dashboard/orders" element={<OrderManagement />} /> {/* Include your OrderManagement component */}
          <Route path="/dashboard/customers" element={<CustomerManagement />} /> {/* Include your CustomerManagement component */}
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
