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
      <label htmlFor="nameFilter">
        Name:
        <input
          type="text"
          name="nameFilter"
          value={ filterByName.name }
          id="nameFilter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default FilterByName;
