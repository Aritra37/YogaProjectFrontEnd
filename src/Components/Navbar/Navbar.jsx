import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
return(
<nav class="navbar">
    <div class="logo">Yoga</div>
        <ul class="nav-links">
            <div class="menu">
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/Batch">Batches</Link>
                </li>
            </div>
        </ul>
</nav>
);
}
export default Navbar;