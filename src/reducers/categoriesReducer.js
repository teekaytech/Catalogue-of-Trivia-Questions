import {
  FETCH_CATEGORIES,
  FILTER_DIFFICULTY,
  initialState,
} from '../actions/types';

const categoriesReducer = (state = initialState, action) => {
  const getCategories = allCategories => {
    const categories = allCategories.map(cat => cat.category);
    return Array.from(new Set(categories));
  };

  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: getCategories(action.payload.results),
      };
    case FILTER_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
