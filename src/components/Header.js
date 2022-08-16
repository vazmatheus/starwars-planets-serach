import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumber from './FIlterByNumber';

const Header = () => (
  <div>
    <FilterByName />
    <FilterByNumber />
  </div>
);

export default Header;
