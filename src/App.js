import React from 'react';
import './App.css';
import Login from './components/login';
import { ThemeProvider } from '@material-ui/core';
import {customTheme} from './components/customTheme'
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
      <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
