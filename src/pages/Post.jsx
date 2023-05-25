import { Link, useParams } from "react-router-dom";
import "./Pages.css";
import NotFound from "./NotFound";
const Post = () => {
    const params = useParams();
    if (isNaN(params.id)) {
        return <NotFound />
    }
    // Use http request get data by id
    return (<div className="blog">
        <h1>Post - {params.id}</h1>
        <Link to={`/posts/${parseInt(params.id) + 1}`}>Go to next post</Link>
        <div>{JSON.stringify(params)}</div>
    </div>);
}

export default Post; 