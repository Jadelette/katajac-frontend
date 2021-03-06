import React from 'react';
import {render, screen} from '@testing-library/react';

import RangeViewer from './RangeViewer';

describe("<RangeViewer />", () => {
  describe('when fizzbuzz is not applied', () => {
    it('renders a list of numbers ', () => {
      setUp(5, false)

      const displayedOutput = screen.getByText("1, 2, 3, 4, 5");

      expect(displayedOutput).toBeInTheDocument();
    });
  });

  describe('when fizzbuzz is applied', () => {
    it('replaces a number with Fizz! if it is divisible by three', async () => {
      setUp(15, true)

      const displayedOutput = await screen.findAllByText("Fizz!,");

      expect(displayedOutput).toHaveLength(4);
    });

    it('replaces a number with Buzz! if it is divisible by Five', async () => {
      setUp(15, true)

      const displayedOutput = await screen.findAllByText("Buzz!,");

      expect(displayedOutput).toHaveLength(2);
    });

    it('replaces a number with FizzBuzz! if it is divisible by Three and Five', async () => {
      setUp(15, true)

      const displayedOutput = await screen.findAllByText("FizzBuzz!,");

      expect(displayedOutput).toHaveLength(1);
    });
  });
});

function setUp(max, fizzBuzzOn) {
  return render(< RangeViewer min={1}
                              max={max}
                              increment={1}
                              fizzBuzzOn={fizzBuzzOn}
  />)
}