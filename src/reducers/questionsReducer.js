import { FETCH_QUESTIONS, initialState, SET_ERROR } from '../actions/types';

const questionsReducer = (state = initialState, action) => {
  if (action.type === FETCH_QUESTIONS) {
    return {
      ...state,
      questions: action.payload,
    };
  }
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default questionsReducer;
