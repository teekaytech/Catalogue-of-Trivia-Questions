import React from 'react';
import PropTypes from 'prop-types';
import { categoryType } from '../actions/types';

const CategoryFilter = ({ handleCategoryChange }) => {
  const handleChange = type => {
    handleCategoryChange(type);
  };

  const catList = categoryType.map(cat => (
    <option key={Math.random()} value={cat}>
      {cat.charAt(0).toUpperCase() + cat.substr(1).toLowerCase()}
    </option>
  ));

  return (
    <div>
      <label htmlFor="categoryFilter">
        Levels of difficulty:
        <select
          name="category"
          id="categoryFilter"
          onChange={e => {
            handleChange(e.target.value);
          }}
        >
          <option>All levels</option>
          {catList}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
