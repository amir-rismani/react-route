import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Download from '../pages/Download';

const WebRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='about-us' element={<AboutUs />}></Route>
                <Route path='contact-us' element={<ContactUs />}></Route>
                <Route path='blogs' element={<Blogs />}></Route>
                <Route path='blogs/:id' element={<Blog />}></Route>
                <Route path='posts' element={<Posts />}></Route>
                <Route path='posts/:id' element={<Post />}></Route>
                <Route path='profile' element={<Profile />}>
                    <Route path='dashboard' element={<Dashboard />}></Route>
                    <Route path='download' element={<Download />}></Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default WebRoutes;