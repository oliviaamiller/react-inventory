import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bird link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bird/i);
  expect(linkElement).toBeInTheDocument();
});
