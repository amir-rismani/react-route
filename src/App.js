import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './layouts/layout';
function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      </Routes>
    </Layout>
  );
}

export default App;
