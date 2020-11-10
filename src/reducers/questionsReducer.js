import { FETCH_QUESTIONS, initialState } from '../actions/types';

const questionsReducer = (state = initialState, action) => {
  if (action.type === FETCH_QUESTIONS) {
    return {
      ...state,
      questions: action.payload,
    };
  }
  return state;
};

export default questionsReducer;
