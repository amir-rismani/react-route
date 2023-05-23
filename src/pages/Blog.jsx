import { Link, useParams } from "react-router-dom";
import "./Pages.css";
const Blog = () => {
    const params = useParams();
    // Use http request get data by id
    return (<div className="blog">
        <h1>Blog - {params.id}</h1>
        <Link to="/blogs">Go to blogs</Link>
    </div>);
}

export default Blog;