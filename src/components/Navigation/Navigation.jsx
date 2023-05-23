import { Link } from "react-router-dom";
import './Navigation.css'
const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;