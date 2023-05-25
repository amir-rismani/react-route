import { Link } from "react-router-dom";
import "./Pages.css";

const postItems = [
    { path: '/posts/1', title: 'Post 1' },
    { path: '/posts/2', title: 'Post 2' },
    { path: '/posts/3', title: 'Post 3' },
    { path: '/posts/4', title: 'Post 4' },
];

const Posts = () => {
    return (<div className="blogs">
        <h1>Posts</h1>
        {postItems.map(postItem => <Link key={postItem.path} to={postItem.path}>{postItem.title}</Link>)}
    </div>);
}

export default Posts;