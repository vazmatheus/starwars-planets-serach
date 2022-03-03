import React, { useContext } from 'react';
import { MyContext } from '../context';

const FilterByName = () => {
  const { filterByName, setFilterByName } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName({
      name: value,
    });
  };

  return (
    <div>
      <h1>Project Star Wars - Trybe</h1>
      <input
        type="text"
        name={ filterByName }
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
};

export default FilterByName;
