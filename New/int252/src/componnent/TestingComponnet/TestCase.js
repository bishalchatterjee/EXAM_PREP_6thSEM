import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments the count when the button is clicked', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  const buttonElement = getByTestId('increment-btn');

  // Initial count should be 0
  expect(countElement.textContent).toBe('0');

  // Click the button
  fireEvent.click(buttonElement);

  // Count should increment by 1
  expect(countElement.textContent).toBe('1');

  // Click the button again
  fireEvent.click(buttonElement);

  // Count should increment by 1 again
  expect(countElement.textContent).toBe('2');
});
