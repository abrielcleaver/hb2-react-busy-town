import { render, screen } from '@testing-library/react';
import App from './App';

test('renders second phrase under lizard', () => {
  render(<App />);
  const lizardPhrase = screen.getByText(/the lizard chomped down on the alien/i);
  expect(lizardPhrase).toBeInTheDocument();
});
