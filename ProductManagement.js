import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

// ... (previous imports)

const ProductManagement = () => {
  const [parentCatalogs, setParentCatalogs] = useState([]);
  const [childCatalogs, setChildCatalogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedChildCatalog, setSelectedChildCatalog] = useState(null);

  useEffect(() => {
    // Fetch parent catalogs
    fetch('http://localhost:8080/api/parent-catalogs')
      .then(response => response.json())
      .then(data => setParentCatalogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleParentClick = (parentCatalogId) => {
    fetch(`http://localhost:8080/api/child-catalogs?parentCatalogId=${parentCatalogId}`)
      .then(response => response.json())
      .then(data => setChildCatalogs(data))
      .catch(error => console.error('Error:', error));
  };

  const handleChildClick = (childCatalogId) => {
    fetch(`http://localhost:8080/api/products?childCatalogId=${childCatalogId}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
    setSelectedChildCatalog(childCatalogId); // Update selected child catalog
  };

  return (
    <div className="product-management">
      <Topbar /> <Sidebar />
      <div className="content">
        <div>
          <h2 style={{ color: 'white' }}>Product Management Content</h2>
          <Link to="/dashboard">
            <button>Go to Dashboard</button>
          </Link>
          <ul>
            {parentCatalogs.map((catalog) => (
              <li key={catalog.id} className="catalog-item">
                <Link
                  to="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleParentClick(catalog.id);
                  }}
                >
                  {catalog.parentCatalogName}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {childCatalogs.map((childCatalog) => (
              <li key={childCatalog.id} className="catalog-item">
                <Link
                  to={`/${childCatalog.parentCatalog.parentCatalogName}/${childCatalog.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleChildClick(childCatalog.id);
                  }}
                  className={selectedChildCatalog === childCatalog.id ? 'selected' : ''}
                >
                  {childCatalog.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
