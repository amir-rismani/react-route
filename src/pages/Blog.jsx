import { Link, useLocation, useParams } from "react-router-dom";
import "./Pages.css";
import NotFound from "./NotFound";

const Blog = () => {
    const params = useParams();
    const location = useLocation();
    if (isNaN(params.id)) {
        return <NotFound />
    }

    // Use http request get data by id
    return (<div className="blog">
        <h1>Blog - {params.id}</h1>
        <Link to={{ pathname: `/blogs/${parseInt(params.id) + 1}`, search: location.search }}>Go to next blog</Link>
    </div>);
}

export default Blog;