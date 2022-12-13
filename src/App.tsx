import React from 'react';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
