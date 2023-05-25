import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Profile from './pages/Profile';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <Blog /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <Post /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> }
];

export default routes;
