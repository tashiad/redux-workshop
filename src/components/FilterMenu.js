import React from 'react';
import MenuItem from '../containers/MenuItem';

const FilterMenu = () => {

  return (
    <section className="FilterMenu">
      <MenuItem filter='SHOW_ALL'>All ToDos</MenuItem>
      <MenuItem filter='SHOW_ACTIVE'>Active</MenuItem>
      <MenuItem filter='SHOW_COMPLETED'>Completed</MenuItem>
    </section>
  )
}

export default FilterMenu;
