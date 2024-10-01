// src/components/CountryList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  console.log(countries);
  

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data); // Initialize with all countries
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleSearchChange = (event) => {
    
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter countries based on the search query
    const filtered = countries.filter(country => 
      country.name.common.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="container">
      <h1 className="title">Countries of the World</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="country-grid">
        {filteredCountries.map((country, index) => (
          <Link to={`/country/${country.cca3}`} key={index} className="country-card">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="country-flag" />
            <h2 className="country-name">{country.name.common}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
