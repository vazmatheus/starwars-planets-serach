import React, { useContext, useState } from 'react';
import { MyContext } from '../context';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

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
    const newFilterByNumber = [
      ...filterByNumber,
      filterByNumericValues,
    ];
    setFilterByNumber(newFilterByNumber);
    setFilterByNumericValue({
      column: columns.find((c) => !newFilterByNumber.some(({ column }) => column === c)),
      comparison: 'maior que',
      value: '0',
    });
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
            {columns.filter((c) => !filterByNumber.some(({ column }) => column === c))
              .map((column) => <option key={ column } value={ column }>{column}</option>)}
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
