import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import { fetchCountries } from '../../services/countries';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setErrorMessage('Uh-oh! Something is effed up. Try reloading the page? Or writing us an angry letter');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{errorMessage}</p>
      <div className='country-list'>
        {countries.map((country) => (
          <CountryCard key={country.id} name={country.name} code={country.iso2} />
        ))}
      </div>
    </>
  );
}
