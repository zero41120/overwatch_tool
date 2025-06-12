/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MinValueSection from '../input/MinValueSection';

const attrTypes = ['AP', 'WP'];

test('renders default group when enabled', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <MinValueSection attrTypes={attrTypes} />
    </Provider>
  );
  const checkbox = getByLabelText('Enable Minimum Values');
  fireEvent.click(checkbox);
  expect(getByText('Add Group')).toBeInTheDocument();
  expect(getByText('Health')).toBeInTheDocument();
  expect(getByText('Armor')).toBeInTheDocument();
  expect(getByText('Shield')).toBeInTheDocument();
});
