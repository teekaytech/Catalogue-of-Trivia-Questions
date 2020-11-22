import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import {
  fetchCategories, fetchQuestions, setCategory,
} from '../actions';
import styles from '../css_modules/categories.module.css';

const CategoryList = ({
  fetchQuestions, categories, fetchCategories, setCategory, error,
}) => {
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  const handleCategoryChange = category => {
    fetchQuestions();
    setCategory(category);
  };

  const CategoryList = categories.length === 0 ? (
    <span className={styles.loading}>Loading categories...</span>
  ) : (
    categories.map(category => (
      <Category
        name={category}
        handleSubmit={handleCategoryChange}
        key={uuidv4()}
      />
    ))
  );

  return (
    <main className={styles.main}>
      <h2 className={styles.cHeader}>List of available categories</h2>
      <div className={styles.categories}>
        {CategoryList}
        <p>{ error ? 'Problem with API call. Please try again.' : ''}</p>
      </div>

    </main>
  );
};

CategoryList.defaultProps = {
  error: '',
};

CategoryList.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object).isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
  setCategory: category => {
    dispatch(setCategory(category));
  },
});

const mapStateToProps = state => ({
  categories: state.categories.categories,
  questions: state.questions.questions,
  difficulty: state.categories.difficulty,
  error: state.categories.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
