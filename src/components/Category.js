import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ name, handleSubmit }) => (
  <div>
    <h4>{name}</h4>
    <Link to={`/categories/${name}`} onClick={() => handleSubmit(name)}>
      View Questions
    </Link>
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Category;
