import React from 'react';

import './CountryCard.css';

export default function CountryCard({ code, name }) {
  return (
    <div className='country-card'>
      <img
        src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
        width="80"
        alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
