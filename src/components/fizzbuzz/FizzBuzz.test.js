import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';

import FizzBuzz from './FizzBuzz';

describe('<FizzBuzz>', () => {
  it('renders a page title', async () => {
    render(<FizzBuzz />)

    const element = await screen.findByText(/welcome to fizzbuzz!/i)

    expect(element).toBeInTheDocument();
  })

  it('renders a page description', async () => {
    render(<FizzBuzz />)

    const element = await screen.findByText('Discover which numbers in a chosen range are divisible by 3 (Fizz!) and 5 (Buzz!)')

    expect(element).toBeInTheDocument();
  })

  it('renders a range selection slider', async () => {
    render(<FizzBuzz />)

    const element = await screen.findByTestId('fizzbuzz-range-slider')

    expect(element).toBeInTheDocument();
  })
})