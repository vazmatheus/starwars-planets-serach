import React, { useContext } from 'react';
import { MyContext } from '../context';

const Table = () => {
  const { planets: { results }, filterByName, filterByNumber } = useContext(MyContext);
  const { name } = filterByName;
  return (
    results ? (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {results.filter((planet) => {
            if (!planet.name.includes(name)) return false;
            if (filterByNumber.length > 0
              && filterByNumber.some(({ column, comparison, value }) => {
                switch (comparison) {
                case 'maior que':
                  return (planet[column] <= Number(value)
                  || planet[column] === 'unknown');
                case 'menor que':
                  return (planet[column] >= Number(value)
                  || planet[column] === 'unknown');
                case 'igual a':
                  return (planet[column] !== (value)
                  || planet[column] === 'unknown');
                default:
                  return false;
                }
              })) return false;
            return true;
          }).map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : <h1>Loading...</h1>
  );
};

export default Table;
