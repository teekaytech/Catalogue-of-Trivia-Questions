import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Navbar from '../components/Navbar';

describe('test the Navbar component', () => {
  const mockClick = jest.fn();
  const title = 'Catalogue of Trivia Questions';
  const { getByText } = render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar handleCategoryChange={mockClick} />
        </BrowserRouter>
      </Provider>
      ,
    </>,
  );

  test('should render the main header on the navbar', () => {
    expect(getByText(title)).not.toBeNull();
    expect(getByText(title)).toBeTruthy();
  });
});
