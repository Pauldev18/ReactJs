import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { Outlet, Link } from 'react-router-dom';
import SideBar from './components/Admin/SideBar';



function App() {
  return (
    <div className='app-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='app-content'>
        <Outlet />
      </div>
    </div>

  );
}

export default App;
