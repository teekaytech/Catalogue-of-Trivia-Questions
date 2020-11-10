import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  questions: questionsReducer, categories: categoriesReducer,
});
