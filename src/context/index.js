import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import fetchAllPlanets from '../services/fetch';

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumber, setFilterByNumber] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await fetchAllPlanets();
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  const value = {
    planets,
    filterByName,
    setFilterByName,
    filterByNumber,
    setFilterByNumber,
  };

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
