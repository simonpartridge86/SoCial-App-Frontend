import { render, screen } from '@testing-library/react';
import Header from './index.js';
import App from '../App/App.js'


test('renders Header', () => {
  render (<App/>)  
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
});
