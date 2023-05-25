import { Link, useLocation } from "react-router-dom";
import "./Pages.css";
import queryString from 'query-string';
const blogItems = [
    { path: '/blogs/1', title: 'Blog 1' },
    { path: '/blogs/2', title: 'Blog 2' },
    { path: '/blogs/3', title: 'Blog 3' },
    { path: '/blogs/4', title: 'Blog 4' },
];

const Blogs = () => {
    const location = useLocation();

    const searchObject = queryString.parse(location.search);
    return (<div className="blogs">
        <h1>Blogs</h1>
        {blogItems.map(blogItem => <Link key={blogItem.path} to={{ pathname: blogItem.path, search: location.search }}>{blogItem.title}</Link>)}
        <span>Location search object: {JSON.stringify(searchObject)}</span>
    </div>);
}

export default Blogs;