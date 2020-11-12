/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question';

const Detail = ({ questions, category, difficulty }) => {
  const setDifficulty = question => (difficulty === 'All' ? question.difficulty : difficulty);

  const filteredQuestions = questions && questions.length
    ? questions.filter(
      question => question.category === category
            && question.difficulty === setDifficulty(question),
    )
    : false;

  const QuestionList = filteredQuestions ? (
    filteredQuestions.map(question => (
      <div key={uuidv4()}>
        <Question question={question} />
      </div>
    ))
  ) : (
    <div>Loading Questions...</div>
  );

  return (
    <div>
      <h4>
        Available trivia questions for
        {' '}
        {category}
        {' '}
        category:
      </h4>
      <h6>
        No. of Questions:
        {' '}
        {filteredQuestions.length}
        ,
        Level of Difficulty:
        {' '}
        { difficulty }
      </h6>
      {QuestionList}
    </div>
  );
};

Detail.defaultProps = {
  questions: [],
};

Detail.propTypes = {
  questions: PropTypes.arrayOf(Object),
  category: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  questions: state.questions.questions.results,
  category: state.categories.category,
  difficulty: state.categories.difficulty,
});

export default connect(mapStateToProps)(Detail);
