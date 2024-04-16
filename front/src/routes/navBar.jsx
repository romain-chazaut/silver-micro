import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
      <>
        <div id="navbar">
          <ul>
            <li><Link to={`/home`}>home</Link></li>
            <li><Link to={`/search`}>search</Link></li>
            <li><Link to={`/book`}>book</Link></li>
            <li><Link to={`/profile`}>profile</Link></li>
          </ul>
        </div>
        <div id="wrapper">
          <Outlet />
        </div>
      </>
    );
  }