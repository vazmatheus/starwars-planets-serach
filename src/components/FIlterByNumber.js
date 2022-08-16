import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
      comparison: 'bigger than',
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
      comparison: 'bigger than',
      value: '0',
    });
  };

  return (
    <Box sx={ { minWidth: 120, display: 'inline-flex' } }>
      <FormControl
        fullWidth
        sx={ { margin:"10px 10px 10px 0px" } }
      >
        <InputLabel id="column">Column</InputLabel>
        <Select
          name="column"
          labelId="column"
          id="column"
          value={ filterByNumericValues.column }
          label="Column"
          onChange={ handleChange }
        >
          {columns.filter((c) => !filterByNumber.some(({ column }) => column === c))
            .map((column) => <MenuItem key={ column } value={ column }>{column}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={ { margin:"10px 10px 10px 0px" } }
      >
        <InputLabel id="comparison">Comparison</InputLabel>
        <Select
          name="comparison"
          labelId="comparison"
          id="comparison"
          value={ filterByNumericValues.comparison }
          label="Comparison"
          onChange={ handleChange }
        >
          <MenuItem value="bigger than">bigger than</MenuItem>
          <MenuItem value="less than">less than</MenuItem>
          <MenuItem value="equal to">equal to</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="value"
        label="Value"
        name="value"
        type="number"
        value={ filterByNumericValues.value }
        onChange={ handleChange }
        sx={ { margin:"10px 10px 10px 0px" } }
        InputLabelProps={ {
          shrink: true,
        } }
      />
      <Stack spacing={ 2 } direction="row">
        <Button
          variant="contained"
          onClick={ handleClick }
          sx={ { margin:"10px 10px 10px 0px" } }
        >
          Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterByNumber;
