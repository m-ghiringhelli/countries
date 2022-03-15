import React, { useEffect } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import { fetchCountries } from '../../services/countries';

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      console.log(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CountryCard name={'South Africa'} code={'za'}/>
    </div>
  );
}
