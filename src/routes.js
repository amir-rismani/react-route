import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '*', element: <NotFound /> }
];
export default routes;
