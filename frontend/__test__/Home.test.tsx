/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/app/page';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Home />);
    expect(screen.getByText('Zenn is good service!!')).toBeInTheDocument();
  });
});
