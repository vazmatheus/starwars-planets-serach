import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MyContext } from '../context';

const Chart = () => {
  const { planets: { results }, filterByName, filterByNumber } = useContext(MyContext);
  const { name } = filterByName;
  console.log({filterByName, filterByNumber});
  return (
    results ? (
      <TableContainer component={ Paper }>
        <Table sx={ { minWidth: 650 } } aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rotation period</TableCell>
              <TableCell>Orbital period</TableCell>
              <TableCell>Diameter</TableCell>
              <TableCell>Climate</TableCell>
              <TableCell>Gravity</TableCell>
              <TableCell>Terrain</TableCell>
              <TableCell>Surface water</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Films</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Edited</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.filter((planet) => {
              if (!planet.name.includes(name)) return false;
              if (filterByNumber.length > 0
                && filterByNumber.some(({ column, comparison, value }) => {
                  switch (comparison) {
                  case 'bigger than':
                    return (planet[column] <= Number(value)
                    || planet[column] === 'unknown');
                  case 'less than':
                    return (planet[column] >= Number(value)
                    || planet[column] === 'unknown');
                  case 'iequal to':
                    return (planet[column] !== (value)
                    || planet[column] === 'unknown');
                  default:
                    return false;
                  }
                })) return false;
              return true;
            }).map((planet) => (
              <TableRow
                key={ planet.name }
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
              >
                <TableCell component="th" scope="row">
                  {planet.name}
                </TableCell>
                <TableCell>{planet.rotation_period}</TableCell>
                <TableCell>{planet.orbital_period}</TableCell>
                <TableCell>{planet.diameter}</TableCell>
                <TableCell>{planet.climate}</TableCell>
                <TableCell>{planet.gravity}</TableCell>
                <TableCell>{planet.terrain}</TableCell>
                <TableCell>{planet.surface_water}</TableCell>
                <TableCell>{planet.population}</TableCell>
                <TableCell>{planet.films}</TableCell>
                <TableCell>{planet.created}</TableCell>
                <TableCell>{planet.edited}</TableCell>
                <TableCell>{planet.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : <h1>Loading...</h1>
  );
};

export default Chart;
