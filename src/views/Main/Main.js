import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import { fetchCountries } from '../../services/countries';

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.id} name={country.name} code={country.iso2} />
      ))}
    </div>
  );
}
