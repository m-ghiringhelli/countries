import React from 'react';

export default function SelectRow({ name }) {
  return (
    <option value={name}>{name}</option>
  );
}
