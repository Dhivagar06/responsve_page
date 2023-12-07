// MainContent.js

import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="bg-light flex-fill">
      {/* Navbar for smaller screens */}
      <div className="p-2 d-md-none d-flex text-white bg-success">
        <a href="#" className="text-white" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar">
          <i className="fa-solid fa-bars"></i>
        </a>
        <span className="ms-3">REMOTE DEV</span>
      </div>
      {/* Breadcrumb and content area */}
      <div className="p-4">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><i className="fa-solid fa-house"></i></li>
            <li className="breadcrumb-item">Dashboard</li>
            <li className="breadcrumb-item">Orders</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-between">
          <h5>Orders</h5>
          <button className="btn btn-sm btn-light"><i className="fa-solid fa-download"></i> Download</button>
        </div>
        <hr />
        {/* Outlet to render the content based on the route */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
