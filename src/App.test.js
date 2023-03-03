import { render, screen } from '@testing-library/react'; //render <app/> - mock;screen - just like browser
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React - Redux Case Study/i);
  expect(linkElement).toBeInTheDocument();
});
