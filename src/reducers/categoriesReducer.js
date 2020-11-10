import { FETCH_CATEGORIES, initialState } from '../actions/types';

const questionsReducer = (state = initialState, action) => {
  const getCategories = allCategories => {
    const categories = allCategories.map(cat => cat.category);
    return Array.from(new Set(categories));
  };

  if (action.type === FETCH_CATEGORIES) {
    return {
      ...state,
      categories: getCategories(action.payload.results),
    };
  }
  return state;
};

export default questionsReducer;
