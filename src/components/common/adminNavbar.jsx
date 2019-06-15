import React from 'react';
import {Link} from "react-router-dom"

const AdminNavbar = (props) => {
  return ( 
    <div>
    <nav className="my-nav navbar navbar-expand-lg ">
       <Link to="/admin" className="logo-color">BenLeeds</Link>
  
 
    <ul className="navbar-nav ml-auto">
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/admin/users" >Users </Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/admin/vendors" >Vendors</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/admin/items" >Items</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/admin/jobs" >Jobs</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/admin" >Work orders</Link>
      </li>
      
    </ul>
  
</nav>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{props.pageName}</h1>
   
  </div>
</div>
</div>
   );
}
 
export default AdminNavbar;