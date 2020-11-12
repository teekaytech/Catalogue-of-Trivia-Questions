/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => (
  <article>
    <p>{question.category}</p>
    <p>{question.type}</p>
    <p>{question.difficulty}</p>
    <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
    <p dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
  </article>
);

Question.propTypes = {
  question: PropTypes.objectOf({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default Question;
