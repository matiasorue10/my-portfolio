import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../utils/testUtils';
import Header from './header';

describe('Header Component', () => {
  test('it should render links with translated text', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('Work experience')).toBeVisible();
    expect(screen.getByText('About me')).toBeVisible();
    expect(screen.getByText('Contact me')).toBeVisible();
  });
  test('it should have links with the correct href attributes', () => {
    render(<Header />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home');
    expect(screen.getByText('Work experience').closest('a')).toHaveAttribute(
      'href',
      '#work-experence',
    );
    expect(screen.getByText('About me').closest('a')).toHaveAttribute('href', '#about-me');
    expect(screen.getByText('Contact me').closest('a')).toHaveAttribute('href', '#contact');
  });
});
