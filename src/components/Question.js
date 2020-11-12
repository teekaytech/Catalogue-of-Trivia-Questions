/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Question = ({ question }) => {
  const shuffleOptions = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  const validate = (selected, answer) => (selected === answer);

  const checkAnswer = (option, answer) => (validate(option, answer) ? 'right' : 'wrong');

  const optionList = (arr, ans) => {
    const options = [...arr, ans];
    shuffleOptions(options);
    const counter = 0;
    return options.length ? (
      options.map(opt => (
        <li
          key={uuidv4()}
          type="submit"
          id={counter}
          dangerouslySetInnerHTML={{ __html: opt }}
          onClick={() => {
            validate(opt, ans);
          }}
          className={checkAnswer(opt, ans)}
        />
      ))
    ) : (
      <p>No option for this question</p>
    );
  };

  return (
    <article>
      <p>{question.category}</p>
      <p>{question.type}</p>
      <p>{question.difficulty}</p>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
      <p dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
      <ul>
        {optionList(question.incorrect_answers, question.correct_answer)}
      </ul>
    </article>
  );
};

Question.propTypes = {
  question: PropTypes.objectOf({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default Question;
