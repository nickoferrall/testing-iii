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

describe('Open/Closed button tests', () => {
  it('Check if open to start with', () => {
    const { getByTestId } = render(<Dashboard />);
    const openClosedDisplay = getByTestId('openClosedDisplay');
    expect(openClosedDisplay.textContent).toBe('Open');
  });

  it('Check if open changes to closed after click', () => {
    const { getByTestId } = render(<Dashboard />);
    const button = getByTestId('openCloseButton');
    const openClosedDisplay = getByTestId('openClosedDisplay');
    expect(openClosedDisplay.textContent).toBe('Open');
    fireEvent.click(button);
    expect(openClosedDisplay.textContent).toBe('Closed');
  });

  it('Check if open changes to closed after click', () => {
    const { getByTestId } = render(<Dashboard />);
    const button = getByTestId('openCloseButton');
    const openClosedDisplay = getByTestId('openClosedDisplay');
    expect(openClosedDisplay.textContent).toBe('Open');
    fireEvent.click(button);
    expect(openClosedDisplay.textContent).toBe('Closed');
  });

  it('Check if open toggles from open to closed to open', () => {
    const { getByTestId } = render(<Dashboard />);
    const button = getByTestId('openCloseButton');
    const openClosedDisplay = getByTestId('openClosedDisplay');
    expect(openClosedDisplay.textContent).toBe('Open');
    fireEvent.click(button);
    expect(openClosedDisplay.textContent).toBe('Closed');
    fireEvent.click(button);
    expect(openClosedDisplay.textContent).toBe('Open');
  });
});

describe('Locked/Unlocked button tests', () => {
  it('Check if unlocked to start with', () => {
    const { getByTestId } = render(<Dashboard />);
    const lockUnlockedDisplay = getByTestId('lockUnlockedDisplay');
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
  });

  it('Check if unlocked changes to locked after clicking close gate and lock', () => {
    const { getByTestId } = render(<Dashboard />);
    const openCloseBtn = getByTestId('openCloseButton');
    const lockUnlockBtn = getByTestId('lockUnlockButton');
    const lockUnlockedDisplay = getByTestId('lockUnlockedDisplay');
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
    fireEvent.click(openCloseBtn);
    fireEvent.click(lockUnlockBtn);
    expect(lockUnlockedDisplay.textContent).toBe('Locked');
  });

  it('Check if unlocked toggles from unlocked to locked to unlocked', () => {
    const { getByTestId } = render(<Dashboard />);
    const openCloseBtn = getByTestId('openCloseButton');
    const lockUnlockBtn = getByTestId('lockUnlockButton');
    const lockUnlockedDisplay = getByTestId('lockUnlockedDisplay');
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
    fireEvent.click(openCloseBtn);
    fireEvent.click(lockUnlockBtn);
    expect(lockUnlockedDisplay.textContent).toBe('Locked');
    fireEvent.click(lockUnlockBtn);
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
  });
});

describe('Check if disabled button functionality works', () => {
  it('Should not be able to lock before closing the gate', () => {
    const { getByTestId } = render(<Dashboard />);
    const lockUnlockBtn = getByTestId('lockUnlockButton');
    const lockUnlockedDisplay = getByTestId('lockUnlockedDisplay');
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
    fireEvent.click(lockUnlockBtn);
    expect(lockUnlockedDisplay.textContent).toBe('Unlocked');
  });
});
