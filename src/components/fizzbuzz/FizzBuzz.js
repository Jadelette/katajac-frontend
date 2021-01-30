import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from "./sub-components/FizzBuzzRangeSlider";

import './FizzBuzz.scss';

export default function FizzBuzz() {
  const [value, setValue] = React.useState([20, 37]);
  const [min, setMin] = React.useState(20)
  const [max, setMax] = React.useState(37)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMin(Math.min(...newValue))
    setMax(Math.max(...newValue))
  };

  return (
    <div>
      <div className="fizzbuzz-header">
        <h1>Welcome to FizzBuzz!</h1>
        <h3>Discover which numbers in a chosen range are divisible by 3 (Fizz!) and 5 (Buzz!)</h3>
      </div>
      <div className='fizzbuzz-range-slider-container' data-testid='fizzbuzz-range-slider'>
        <RangeSlider changeHandler={handleChange} value={value}/>
      </div>
    </div>
  )
}

//TODO: create a UI to interact with FizzBuzz kata
// - choose first number, last number and increment to define the series of numbers tested
// - return list of numbers with fizz, buzz, and fizzbuzz
// - option of which api to use (java/Express/clojure/React only)