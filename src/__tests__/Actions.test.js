import * as Actions from '../actions';
import {
  FILTER_DIFFICULTY,
  SET_CATEGORY,
  SET_ERROR,
} from '../actions/types';

describe('action creators', () => {
  test('should create an action to filter difficulty', () => {
    const difficulty = 'easy';
    const expectedAction = {
      type: FILTER_DIFFICULTY,
      payload: difficulty,
    };
    expect(Actions.filterDifficulty(difficulty)).toEqual(expectedAction);
  });

  test('should create an action to set category', () => {
    const category = 'General Knowledge';
    const expectedAction = {
      type: SET_CATEGORY,
      payload: category,
    };
    expect(Actions.setCategory(category)).toEqual(expectedAction);
  });

  test('should create an action to set error status', () => {
    const response = 'Not Found';
    const expectedAction = {
      type: SET_ERROR,
      payload: response,
    };
    expect(Actions.setError(response)).toEqual(expectedAction);
  });
});
