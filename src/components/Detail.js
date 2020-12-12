import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question';
import styles from '../css_modules/questions.module.css';
import styles2 from '../css_modules/categories.module.css';

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
      <Question question={question} key={uuidv4()} />
    ))
  ) : (
    <div>Loading Questions...</div>
  );

  return (
    <main className={`${styles2.main} ${styles.main}`}>
      <div className={styles.questionDetails}>
        <h4>
          Trivia questions for
          {' '}
          <span className={styles.catName}>
            {category}
          </span>
          {' '}
          category.
        </h4>
        <h4 className={styles.details}>
          No. of Questions:
          {' '}
          {filteredQuestions.length}
          , Level of Difficulty:
          {' '}
          {difficulty.toUpperCase()}
        </h4>
      </div>
      {QuestionList}
    </main>
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
