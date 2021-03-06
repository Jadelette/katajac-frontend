import React from 'react';
import {render, screen} from '@testing-library/react';

import RangeViewer from './RangeViewer';

describe("<RangeViewer />", () => {
  describe('when fizzbuzz is not applied', () => {
    it('renders a list of numbers ', () => {
      render(< RangeViewer min={1}
                           max={5}
                           increment={1}
                           fizzBuzzOn={false}
      />)

      const displayedOutput = screen.getByText("1, 2, 3, 4, 5");

      expect(displayedOutput).toBeInTheDocument();
    });
  });

  describe('when fizzbuzz is applied', () => {
    it('replaces a number with Fizz! if it is divisible by three', async () => {
      render(< RangeViewer min={1}
                           max={15}
                           increment={1}
                           fizzBuzzOn={true}
      />)

      const displayedOutput = await screen.findAllByText("Fizz!,");

      expect(displayedOutput).toHaveLength(4);
    });

    it('replaces a number with Buzz! if it is divisible by Five', async () => {
      render(< RangeViewer min={1}
                           max={15}
                           increment={1}
                           fizzBuzzOn={true}
      />)

      const displayedOutput = await screen.findAllByText("Buzz!,");

      expect(displayedOutput).toHaveLength(2);
    });

    it('replaces a number with FizzBuzz! if it is divisible by Three and Five', async () => {
      render(< RangeViewer min={1}
                           max={15}
                           increment={1}
                           fizzBuzzOn={true}
      />)

      const displayedOutput = await screen.findAllByText("FizzBuzz!,");

      expect(displayedOutput).toHaveLength(1);
    });
  });
});