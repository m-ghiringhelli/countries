import React from 'react';
import SelectRow from '../SelectRow/SelectRow';

export default function Select({ continents }) {

  return (
    <div>
      <select onChange={(e) => {
        console.log(e.target.value);
      }}>
        <option selected disabled>- pick a continent -</option>
        {continents.map((continent) => (
          <SelectRow key={continent} name={continent} />
        ))}
      </select>
    </div>
  );
}
