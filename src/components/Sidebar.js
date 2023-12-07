import './Sidebar.css'
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Ourhotal from './Ourhotal';
import Offers from './Offers';
import FoodDelivery from './FoodDelivery';
import Weddings from './Weddings';
import Orders from './Orders';
import UserReports from './UserReports';

const Sidebar = () => {

  return (
<div id="bdSidebar" className="d-none d-md-flex flex-column flex-shrink-0 p-3 bg-success text-white offcanvas-md offcanvas-start totalnav" style={{width:'250px'}}>
         <Link to='ourhotels'>Our Hotels</Link>
            <hr />
            <ul class="mynav nav nav-pills flex-column mb-auto">
                <li class="nav-item mb-1">
                 
                    <Link to='ourhotels'>Our Hotels</Link>
                </li>
                <li clasNames="nav-item mb-1">
                    <Link to='offers'>Offers</Link>
                </li>
                <li className="nav-item mb-1">
                    <Link to='fooddelivery'>  Food Delivery</Link>
                </li>
                <li className="nav-item mb-1">
                    <Link to='weddings'>Weddings</Link>
                </li>
                <li className="nav-item mb-1">
                    <Link to='orders'>Orders</Link>
                </li>
                <li className="nav-item mb-1">
                    <Link to='userreports'>  User Reports</Link>
                </li>
            </ul>

            {/* routes */}
            <Routes>
              <Route path='ourhotels' element={<Ourhotal/>} />
              <Route path='offers' element={<Offers/>} />
              <Route path='fooddelivery' element={<FoodDelivery/>} />
              <Route path='weddings' element={<Weddings/>} />
              <Route path='orders' element={<Orders/>} />
              <Route path='userreports' element={<UserReports/>} />
         
            </Routes>
            <hr />
            <div className="d-flex">
                <img src="img/profile_user.jpeg" className="img-fluid rounded me-2" style={{width:"50px"}} alt="" />
                <span>
                    <h6 class="mt-1 mb-0">John Doe</h6>
                    <small>johndoe@remotedev</small>
                </span>
            </div>
            
        </div>
  );
};

export default Sidebar;
