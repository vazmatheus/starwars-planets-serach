import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumber from './FIlterByNumber';

const Header = () => (
  <div>
    <h1>Project Star Wars - Trybe</h1>
    <FilterByName />
    <FilterByNumber />
  </div>
);

export default Header;
