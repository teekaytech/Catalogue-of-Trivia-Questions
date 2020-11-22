import '@testing-library/jest-dom';
import store from '../store';

describe('The store object', () => {
  it('should validate redux store object', () => {
    expect(store).toBeTruthy();
    expect(typeof store.dispatch).toBe('function');
  });
});
