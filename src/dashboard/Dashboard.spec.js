import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

it('Should display vamos', () => {
  const { getByTestId } = render(<Dashboard />);
  const spanishWord = getByTestId('esp');
  expect(spanishWord).toHaveTextContent('Vamos');
});

it('Check if unlocked to start with', () => {
  const { getByTestId } = render(<Dashboard />);
  const lockUnlocked = getByTestId('lockUnlocked');
  expect(lockUnlocked.textContent).toBe('Unlocked');
});

it('Check if open to start with', () => {
  const { getByTestId } = render(<Dashboard />);
  const openClosed = getByTestId('openClosed');
  expect(openClosed.textContent).toBe('Open');
});

it('Check if open changes to closed after click', () => {
  const { getByTestId } = render(<Dashboard />);
  const button = getByTestId('lockUnlockButton');
  const openClosed = getByTestId('openClosed');
  expect(openClosed.textContent).toBe('Open');
  fireEvent.click(button);
  expect(openClosed.textContent).toBe('Closed');
});
