import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => (
  <article>
    <p>{question.category}</p>
    <p>{question.type}</p>
    <p>{question.difficulty}</p>
    <h3>{question.question}</h3>
    <p>{question.correct_answer}</p>
  </article>
);

Question.propTypes = {
  question: PropTypes.arrayOf(Object).isRequired,
};

export default Question;
