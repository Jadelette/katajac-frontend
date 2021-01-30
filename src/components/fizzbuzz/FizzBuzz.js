import React from 'react';
import RangeSlider from "./sub-components/RangeSlider";

import './FizzBuzz.scss';
import RangeViewer from "./sub-components/RangeViewer";
import RangeIncrementSelector from "./sub-components/RangeIncrementSelector";

export default function FizzBuzz() {
  const [value, setValue] = React.useState([0, 100]);
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(100)
  const [increment, setIncrement] = React.useState()

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setMin(Math.min(...newValue))
    setMax(Math.max(...newValue))
  };

  const handleSelectorChange = (event) => {
    setIncrement(event.target.value)
  }

  return (
    <div>
      <div className="fizzbuzz-header">
        <h1>Welcome to FizzBuzz!</h1>
        <h3>Discover which numbers in a chosen range are divisible by 3 (Fizz!) and 5 (Buzz!)</h3>
      </div>
      <div className='fizzbuzz-range-container' data-testid='fizzbuzz-range-slider'>
        <RangeSlider changeHandler={handleSliderChange} value={value}/>
        <RangeIncrementSelector min={min} max={max} increment={increment} changeHandler={handleSelectorChange} />
        <span>Choose an increment between 1 - 12. <br/>
          Both min and max values for your selected range must be divisible by an increment for it to appear in the selector list</span>
        <RangeViewer min={min} max={max} increment={increment} />
      </div>
      <button>Apply FizzBuzz!</button>
    </div>
  )
}

//TODO: create a UI to interact with FizzBuzz kata
// - choose first number, last number and increment to define the series of numbers tested
// - return list of numbers with fizz, buzz, and fizzbuzz
// - option of which api to use (java/Express/clojure/React only)