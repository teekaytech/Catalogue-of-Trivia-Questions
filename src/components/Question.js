/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '../css_modules/questions.module.css';

const Question = ({ question }) => {
  const shuffleOptions = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  const validate = (selected, answer) => {
    const selectedOption = document.getElementById(selected);
    const rightOption = document.getElementById(answer);
    if (selected === answer) {
      selectedOption.classList.add('right');
    } else {
      selectedOption.classList.add('wrong');
      rightOption.classList.add('right');
    }
  };

  const optionList = (arr, ans) => {
    const options = [...arr, ans];
    shuffleOptions(options);
    return options.length ? (
      options.map(opt => (
        <li
          key={uuidv4()}
          type="submit"
          id={opt}
          dangerouslySetInnerHTML={{ __html: opt }}
          onClick={() => {
            validate(opt, ans);
          }}
        />
      ))
    ) : (
      <p>No option for this question</p>
    );
  };

  return (
    <article className={styles.questionContainer}>
      <p className={styles.difficulty}>
        Difficulty:
        {' '}
        {question.difficulty}
      </p>
      <h4 className={styles.question} dangerouslySetInnerHTML={{ __html: question.question }} />
      <ul>
        {optionList(question.incorrect_answers, question.correct_answer)}
      </ul>
    </article>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(String),
    correct_answer: PropTypes.string,
  }).isRequired,
};

export default Question;
