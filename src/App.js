import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {routes.map(route => <Route path={route.path} element={route.element} />)}
      </Routes>
    </Router>
  );
}

export default App;
