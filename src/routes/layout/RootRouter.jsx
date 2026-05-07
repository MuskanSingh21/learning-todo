import Login from '@pages/auth/Login';
import Register from '@pages/auth/Register';
import React from 'react';
import { useRoutes } from 'react-router-dom';

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
  ];

  return useRoutes(routes);
};

export default RootRouter;
