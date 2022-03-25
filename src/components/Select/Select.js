import React from 'react';
import SelectRow from '../SelectRow/SelectRow';

export default function Select({ continents, callback }) {

  return (
    <div>
      <select onChange={(e) => {
        callback(e.target.value);
      }}>
        <option selected disabled>- pick a continent -</option>
        {continents.map((continent) => (
          <SelectRow key={continent} name={continent} value={continent} />
        ))}
      </select>
    </div>
  );
}
