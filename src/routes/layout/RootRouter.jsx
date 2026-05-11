import Login from '@pages/auth/Login';
import Register from '@pages/auth/Register';
import { useRoutes } from 'react-router-dom';
import Home from '@pages/Home';

const RootRouter = () => {
  const routes = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/home',
      element: <Home/>
    }
  ];

  return useRoutes(routes);
};

export default RootRouter;
