import React from "react";
import { NavLink } from "react-router-dom";
import '../style/nav.css';

const Navbar = () => {
    return(
        <>
            <nav className="nav">
                <ul>
                    {/* <li>
                        <NavLink exact to="/" className="link" >Home</NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/login"className="link" >Login</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/table" className="link" >Table</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;