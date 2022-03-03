import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import fetchAllPlanets from '../services/fetch';

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const data = await fetchAllPlanets();
    setPlanets(data);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const value = { planets };

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
