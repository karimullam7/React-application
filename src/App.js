import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  
  return (
    
      <main >
        <Header/>
        <div className='pt-16'>
        <Outlet/>
        </div>
        <Footer/>
      </main>
    
  );
}

export default App;
