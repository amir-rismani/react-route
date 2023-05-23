import { Link } from "react-router-dom";
import "./Pages.css";

const blogItems = [
    { path: '/blogs/1', title: 'Blog 1' },
    { path: '/blogs/2', title: 'Blog 2' },
    { path: '/blogs/3', title: 'Blog 3' },
    { path: '/blogs/4', title: 'Blog 4' },
];

const Blogs = () => {
    return (<div className="blogs">
        <h1>Blogs</h1>
        {blogItems.map(blogItem => <Link key={blogItem.path} to={blogItem.path}>{blogItem.title}</Link>)}
    </div>);
}

export default Blogs;