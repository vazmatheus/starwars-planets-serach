import React, { useContext, useState } from 'react';
import { MyContext } from '../context';

const FilterByNumber = () => {
  const { filterByNumber, setFilterByNumber } = useContext(MyContext);
  const [filterByNumericValues, setFilterByNumericValue] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterByNumericValue({
      ...filterByNumericValues,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilterByNumber([
      ...filterByNumber,
      filterByNumericValues,
    ]);
  };

  return (
    <div>
      <form>
        <label htmlFor="column">
          Column:
          <select
            name="column"
            id="column"
            value={ filterByNumericValues.column }
            data-testid="column-filter"
            onChange={ handleChange }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          Comparison:
          <select
            name="comparison"
            id="comparison"
            value={ filterByNumericValues.comparison }
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          Value:
          <input
            type="number"
            name="value"
            value={ filterByNumericValues.value }
            id="value"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterByNumber;
