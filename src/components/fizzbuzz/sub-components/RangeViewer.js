import React from 'react';
import {range} from 'lodash';

export default function RangeViewer(props) {
  var displayedValues = Array.from(range(props.min, props.max + 1, props.increment));

  function determineOutput() {
    if (props.fizzBuzzOn) {
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
      return <mark className="fizz"> Fizz!,  </mark>;
    } else if (x % 5 === 0 && x % 3 !== 0) {
      return <mark className="buzz">Buzz!, </mark>;
    } else if (x % 3 === 0 && x % 5 === 0) {
      return <mark className="fizzbuzz">FizzBuzz!, </mark>;
    } else {
      return <mark className="number">{x + ", "}</mark>;
    }
  }
}

