/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components'
import Home from '../src/app/page';
import './globals.css';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Home />);
    expect(screen.getByText('Zenn is good service!!')).toBeInTheDocument();
  });
});
