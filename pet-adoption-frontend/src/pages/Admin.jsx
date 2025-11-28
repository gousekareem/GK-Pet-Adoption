import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Supervisor Panel</h1>
      <p className="admin-subtitle">your central adoption workspace.</p>

      <div className="admin-cards">
        <div className="admin-card">
          <h2>Shelter Operations</h2>
          <p>Access and modify shelter information</p>
          <button className="admin-button">Shelters directory</button>
        </div>
        <div className="admin-card">
          <h2>pets directory</h2>
          <p>modify pet profiles.</p>
          <button className="admin-button">Pets list</button>
        </div>
        <div className="admin-card">
          <h2>user directory</h2>
          <p>Handle user accounts and permissions.</p>
          <button className="admin-button">Users list</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
