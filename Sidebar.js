import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
      <List className='sidebar'>
        <ListItem component={Link} to="/dashboard/products" className="listItem">
          <ListItemIcon>
            <DashboardIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Products Management" />
        </ListItem>
        <ListItem component={Link} to="/dashboard/orders" className="listItem">
          <ListItemIcon>
            <ShoppingCartIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Orders Management" />
        </ListItem>
        <ListItem component={Link} to="/dashboard/customers" className="listItem">
          <ListItemIcon>
            <PeopleIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Customers Management" />
        </ListItem>
      </List>
  );
};

export default Sidebar;
