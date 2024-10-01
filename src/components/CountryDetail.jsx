// src/components/CountryDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const CountryDetail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(response => response.json())
      .then(data => setCountry(data[0]))
      .catch(error => console.error('Error fetching country details:', error));
  }, [id]);

  console.log(country); 

  

  if (!country) {
    return <div className="container">Loading... please</div>;
  }

  return (
    <div className="container country-detail">
      <div className="country-header">
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="country-detail-flag" />
        <h1>{country.name.common}</h1>
      </div>
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
};

export default CountryDetail;
