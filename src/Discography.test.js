import { render, screen } from '@testing-library/react';
import Discography from './Discography';

test('renders learn react link', () => {
  render(<Discography />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
