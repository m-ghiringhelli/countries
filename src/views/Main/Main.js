import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import Select from '../../components/Select/Select';
import { fetchCountries } from '../../services/countries';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  //for selected continent
  const [continent, setContinent] = useState('All');
  //to create array of continents
  const [continents, setContinents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (e) {
        setErrorMessage('Uh-oh! Something is effed up. Try reloading the page? Or writing us an angry letter');
      }
    };
    fetchData();
  }, []);

  const filterByContinent = countries.filter((selected) => selected.continent === continent || continent === 'All');

  if (loading) return <p>loading.........</p>;

  return (
    <>
      <p>{errorMessage}</p>
      <div>
        <Select continents={continents} callback={setContinent} />
      </div>
      <div className='country-list'>
        {filterByContinent.map((country) => (
          <CountryCard key={country.id} name={country.name} code={country.iso2} />
        ))}
      </div>
    </>
  );
}
