import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import React from 'react';
import { Header } from './components/Header/Header';
import UserSave from './components/UserSave/UserSave';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <UserSave />
    </>
  );
}

export default App;
