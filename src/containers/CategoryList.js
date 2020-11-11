import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import { fetchCategories } from '../actions';

const CategoryList = ({ categories, fetchCategories }) => {
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  const handleCategoryChange = category => category;

  const CategoryList = categories.length === 0 ? (
    <div>Loading Categories...</div>
  ) : (
    categories.map(category => (
      <div key={uuidv4()}>
        <h4>
          <Category name={category} handleSubmit={handleCategoryChange} />
        </h4>
      </div>
    ))
  );

  return (
    <div>
      <h3>List of Available categories</h3>
      {CategoryList}
    </div>
  );
};

CategoryList.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, { fetchCategories })(CategoryList);
