import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <Blog /> },
    { path: '*', element: <NotFound /> }
];
export default routes;
