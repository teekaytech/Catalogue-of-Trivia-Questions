import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

describe('test for filter by difficulty dropdown component', () => {
  const handleCategoryChange = jest.fn();
  const { getByText, getByLabelText } = render(
    <CategoryFilter handleCategoryChange={handleCategoryChange} />,
  );

  test('should render levels of difficulty dropdown', () => {
    expect(getByLabelText('Levels of difficulty:')).not.toBeNull();

    const dropdown = getByLabelText('Levels of difficulty:').closest('select');
    expect(dropdown.children.length).toBeTruthy();
    expect(dropdown.children.length).toBe(4);
    expect(dropdown.children.length === 3).toBeFalsy();
    expect(dropdown.localName).toBe('select');
    expect(dropdown.firstChild.value).toBe('All levels');
    expect(dropdown.firstChild.value).not.toBe('All');

    fireEvent.change(dropdown, { target: { value: 'easy' } });
    expect(getByText('Easy')).toBeInTheDocument();

    fireEvent.change(dropdown, { target: { value: 'medium' } });
    expect(getByText('Easy').value === 'Easy').toBeFalsy();
    expect(getByText('Medium')).toBeInTheDocument();

    fireEvent.change(dropdown, { target: { value: 'hard' } });
    expect(getByText('Easy').value === 'Easy').toBeFalsy();
    expect(getByText('Medium').value === 'Medium').toBeFalsy();
    expect(getByText('Hard')).toBeInTheDocument();
  });
});
