import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { filterDifficulty } from '../actions';

const Navbar = ({ handleFilter }) => {
  const handleCategoryChange = difficulty => {
    handleFilter(difficulty);
  };

  return (
    <nav>
      <Link to="/">
        <h1>Catalogue of Trivia Questions</h1>
      </Link>
      <div>
        <CategoryFilter handleCategoryChange={handleCategoryChange} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleFilter: difficulty => {
    dispatch(filterDifficulty(difficulty));
  },
});

export default connect(null, mapDispatchToProps)(Navbar);
