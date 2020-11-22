import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import styles from '../css_modules/categories.module.css';

const Category = ({ name, handleSubmit }) => {
  const url = slugify(name.toLowerCase(), '-');
  return (
    <div className={styles.category}>
      <h4>{name}</h4>
      <Link to={`/categories/${url}`} onClick={() => handleSubmit(name)}>
        View questions
      </Link>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Category;
