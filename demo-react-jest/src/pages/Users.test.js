import React from 'react';
import { render } from '@testing-library/react';
import Users from './Users';

describe('Users component', () => {
  it('renders the users text', () => {
    const { getByText } = render(<Users />);
    const usersElement = getByText('Users');
    expect(usersElement).toBeInTheDocument();
  });
});