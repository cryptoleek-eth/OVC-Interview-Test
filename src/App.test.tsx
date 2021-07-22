import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders h1 tag', () => {
  render(<App />);
  const h1Element = screen.getByText(/OVC Interview Test/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders code test desc link', () => {
  render(<App />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders p tag', () => {
  render(<App />);
  const pElement = screen.getByText(/For Code Test details checkout/i);
  expect(pElement).toBeInTheDocument();
});

test('renders UserTable component', () => {
  render(<App />);
  const pElement = screen.getByText(/For Code Test details checkout/i);
  expect(pElement).toBeInTheDocument();
});


