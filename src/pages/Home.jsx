import { Link } from "react-router-dom";
import "./Pages.css";
const Home = () => {
    return (<div className="home">
        <h1>Home</h1>
        <Link to={{ pathname: '/blogs', search: "sort=name&page=3" }}>Go to blogs</Link>
    </div>);
}

export default Home;