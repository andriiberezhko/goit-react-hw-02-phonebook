import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Filter;
