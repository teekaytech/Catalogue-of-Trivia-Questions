import { FETCH_CATEGORIES, FILTER_DIFFICULTY, FETCH_QUESTIONS } from './types';

export const fetchCategories = () => dispatch => {
  fetch('https://opentdb.com/api.php?amount=50')
    .then(response => response.json())
    .then(categories => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories,
    }));
};

export const fetchQuestions = category => dispatch => {
  fetch(`https://opentdb.com/api.php?amount=20&category=${category}`)
    .then(response => response.json())
    .then(questions => dispatch({
      type: FETCH_QUESTIONS,
      payload: questions,
    }));
};

export const filterDifficulty = difficulty => ({
  type: FILTER_DIFFICULTY,
  payload: difficulty,
});
