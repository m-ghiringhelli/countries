import React from 'react';

import './CountryCard.css';

export default function CountryCard({ code, name }) {
  return (
    <div className='country-card'>
      <img
        src={`https://flagcdn.com/w80/${code}.png`}
        srcSet="https://flagcdn.com/w160/za.png 2x"
        width="80"
        alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
