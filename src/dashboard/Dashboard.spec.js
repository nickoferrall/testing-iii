import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

it('Should display vamos', () => {
  const { getByTestId } = render(<Dashboard />);
  const spanishWord = getByTestId('esp');
  expect(spanishWord).toHaveTextContent('Vamos');
});
