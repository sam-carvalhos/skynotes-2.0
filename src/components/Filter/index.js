import React from 'react';
import './style.css';

const Filter = () => {
  return (
    <div className="select">
      <select name="filter" className="filter-todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;
