import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Category from '../components/Category';

describe('tests for category UI component', () => {
  const name = 'CategoryA';
  const mockSubmit = jest.fn();
  const { queryAllByText } = render(
    <>
      <BrowserRouter>
        <Category name={name} handleSubmit={() => mockSubmit()} />
      </BrowserRouter>
      ,
    </>,
  );
  test('should have categories and view-questions link', () => {
    queryAllByText(name);
    queryAllByText('View questions');
    expect(screen.getByText('View questions').closest('a'))
      .toHaveAttribute('href', `/categories/${name}`);
  });

  fireEvent.click(screen.getByText('View questions').closest('a'));
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
