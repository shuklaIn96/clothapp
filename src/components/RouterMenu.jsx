import React from "react";
import { Link, NavLink } from "react-router-dom";

function RouterMenu() {
    return (
        <>
            <nav>
                <div>
                    <h2>LOGO</h2>
                </div>
                <ul>
                    <li>  
                        {/* <li><a href="/">Home</a></li> */}
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        {/* <li><a href="/RouterAbout">About</a></li> */}
                        <NavLink to="/RouterAbout">About</NavLink>
                    </li>
                    <li> 
                        {/* <li><a href="/RouterService">Service</a></li> */}
                        <NavLink to="/RouterService">Service</NavLink>
                    </li>
                    <li><NavLink to="/RouterUser">User List</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default RouterMenu;