 // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
