import React from 'react';
import { render } from '@testing-library/react';
import Question from '../components/Question';

describe('Test suite for Questions', () => {
  const question = {
    question: 'What is your profession called?',
    difficulty: 'easy',
    incorrect_answers: ['Hunter', 'Lawyer', 'Doctor'],
    correct_answer: 'Engineer',
  };
  const { getByText } = render(
    <Question question={question} />,
  );

  test('should check if question(s) is rendered', () => {
    expect(getByText('Difficulty: easy')).toBeInTheDocument();
    expect(getByText('What is your profession called?')).toBeInTheDocument();
  });
});
