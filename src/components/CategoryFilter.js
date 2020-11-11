import React from 'react';
import PropTypes from 'prop-types';
import { categoryType } from '../actions/types';

const CategoryFilter = ({ handleCategoryChange }) => {
  const handleChange = type => {
    handleCategoryChange(type);
  };

  const catList = categoryType.map(cat => (
    <option key={Math.random()} value={cat}>
      {cat}
    </option>
  ));

  return (
    <div>
      <label htmlFor="categoryFilter">
        Filter Categories:
        <select
          name="category"
          id="categoryFilter"
          onChange={e => {
            handleChange(e.target.value);
          }}
        >
          <option>All Categories</option>
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
