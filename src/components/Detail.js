import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question';

const Detail = ({ questions, category }) => {
  const filteredQuestions = (questions && questions.length) ? (
    questions.filter(question => question.category === category)
  ) : (
    false
  );

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
};

const mapStateToProps = state => ({
  questions: state.questions.questions.results,
  category: state.categories.category,
});

export default connect(mapStateToProps)(Detail);
