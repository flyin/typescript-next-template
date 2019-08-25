import React from 'react';
import { Header } from './Header';
import { render } from '@testing-library/react';

it('renders Header', () => {
    const { getByText } = render(<Header />);
    expect(getByText('HEADER')).toMatchSnapshot();
});
