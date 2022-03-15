import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import Select from '../../components/Select/Select';
import { fetchCountries } from '../../services/countries';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        //put the continent values from countries into array
        const contList = [...new Set(
          resp.map((country) => (country.continent)
          ))];
        //filter out null
        setContinents(contList.filter(Boolean));
      } catch (e) {
        setErrorMessage('Uh-oh! Something is effed up. Try reloading the page? Or writing us an angry letter');
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <p>{errorMessage}</p>
      <div>
        <Select continents={ continents } />
      </div>
      <div className='country-list'>
        {countries.map((country) => (
          <CountryCard key={country.id} name={country.name} code={country.iso2} />
        ))}
      </div>
    </>
  );
}
