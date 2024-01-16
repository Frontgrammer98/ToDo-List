import './App.css';
import React,{ useState } from 'react';
import redeveloperlogo from './Assets/relogo.png';
import Main from './Components/Main';


function App() {

  return (
    <div className='App'>
      <div className='redeveloper-logo-container'>
        <img
          className='redeveloper-logo'
          src={redeveloperlogo}
          alt='RE Developer Logo'
        />
      </div>

      <div className='tasks-principal-container'>
        <h1>ToDo List</h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
