import React from 'react';
import {range} from 'lodash';

export default function RangeViewer({min, max, increment, fizzBuzzOn}) {
  const displayedValues = Array.from(range(min, max + 1, increment));

  function determineOutput() {
    if (fizzBuzzOn) {
      return displayedValues.map(x => applyFizzBuzz(x))
    } else {
      return displayedValues.join(", ");
    }
  }

  return (
    <div className="range-viewer-container">
      <p>{determineOutput()}</p>
    </div>)

  function applyFizzBuzz(x) {
   if (x % 3 === 0 && x % 5 !== 0) {
      return <mark className="fizz" key={x}> Fizz!,  </mark>;
    } else if (x % 5 === 0 && x % 3 !== 0) {
      return <mark className="buzz" key={x}>Buzz!, </mark>;
    } else if (x % 3 === 0 && x % 5 === 0) {
      return <mark className="fizzbuzz" key={x}>FizzBuzz!, </mark>;
    } else {
      return <mark className="number" key={x}>{x + ", "}</mark>;
    }
  }
}

