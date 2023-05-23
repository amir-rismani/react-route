import { NavLink } from "react-router-dom";
import './Navigation.css'
const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;