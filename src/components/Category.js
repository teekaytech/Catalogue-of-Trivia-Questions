import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css_modules/categories.module.css';

const Category = ({ name, handleSubmit }) => (
  <div className={styles.category}>
    <h4>{name}</h4>
    <Link to={`/categories/${name}`} onClick={() => handleSubmit(name)}>
      Click to view questions
    </Link>
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Category;
