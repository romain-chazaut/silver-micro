import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
      <>
        <div id="navbar">

          <div className="nav-menu">
            <NavLink to={`/home`}
            style={({ isActive }) => {
              return {
                color: isActive ? "#08492E" : "",
              };
            }}
            >
                <img src="./src/assets/img/home-icon.svg" alt="home link" />
                <p>home</p>
            </NavLink>
          </div>

          <div className="nav-menu">
            <NavLink to={`/search`}
            style={({ isActive }) => {
              return {
                color: isActive ? "#08492E" : "",
              };
            }}  
            >
                <img src="./src/assets/img/search-icon.svg" alt="search link" />
                <p>search</p>
            </NavLink>
          </div>

          <div className="nav-menu">
            <NavLink to={`/book`}
            style={({ isActive }) => {
              return {
                color: isActive ? "#08492E" : "",
              };
            }}
            >
                <img src="./src/assets/img/book-icon.svg" alt="book link" />
                <p>book</p>
            </NavLink>
          </div>

          <div className="nav-menu">
            <NavLink to={`/profile`}
            style={({ isActive }) => {
              return {
                color: isActive ? "#08492E" : "",
              };
            }}
            >
                <img src="./src/assets/img/profile-icon.svg" alt="profile link" />
                <p>profile</p>
            </NavLink>
          </div>

        </div>

        <div id="wrapper">
          <Outlet />
        </div>

      </>
    );
  }