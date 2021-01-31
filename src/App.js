import React from 'react';
import './App.css';
import RegistrationForm from './components';
import CustomizedDialogs from './components/dialog';

function App() {
  return (
    <div className="App">
      <CustomizedDialogs title="Register Here">
      <RegistrationForm />
        </CustomizedDialogs>
      
    </div>
  ); 
}

export default App;
