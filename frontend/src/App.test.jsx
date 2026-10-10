import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('axios', () => ({
  default: {
    get: () => new Promise(() => {}),
    post: () => new Promise(() => {}),
  },
}));

test('renders the task manager heading', () => {
  render(<App />);
  const heading = screen.getByText(/task manager/i);
  expect(heading).toBeInTheDocument();
});
