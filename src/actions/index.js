import {
  FETCH_CATEGORIES, FILTER_DIFFICULTY, FETCH_QUESTIONS, SET_CATEGORY, SET_ERROR,
} from './types';

export const fetchCategories = () => dispatch => {
  fetch('https://opentdb.com/api.php?amount=50')
    .then(response => response.json())
    .then(categories => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories,
    }))
    .catch(error => dispatch({
      type: SET_ERROR,
      payload: error,
    }));
};

export const fetchQuestions = () => dispatch => {
  fetch('https://opentdb.com/api.php?amount=50')
    .then(response => response.json())
    .then(questions => dispatch({
      type: FETCH_QUESTIONS,
      payload: questions,
    }))
    .catch(error => dispatch({
      type: SET_ERROR,
      payload: error,
    }));
};

export const filterDifficulty = difficulty => ({
  type: FILTER_DIFFICULTY,
  payload: difficulty === 'All levels' ? 'All' : difficulty,
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setError = response => ({
  type: SET_ERROR,
  payload: response,
});
