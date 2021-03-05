import React from 'react';
import RangeSlider from "./sub-components/RangeSlider";

import './FizzBuzz.scss';
import RangeViewer from "./sub-components/RangeViewer";
import RangeIncrementSelector from "./sub-components/RangeIncrementSelector";

export default function FizzBuzz() {
  const [value, setValue] = React.useState([1, 100]);
  const [min, setMin] = React.useState(1)
  const [max, setMax] = React.useState(100)
  const [increment, setIncrement] = React.useState()
  const [fizzBuzzOn, setfIzzBuzzOn] = React.useState(false);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setMin(Math.min(...newValue))
    setMax(Math.max(...newValue))
  };

  const handleSelectorChange = (event) => {
    setIncrement(event.target.value)
  }

  const handleClick = () => {
    fizzBuzzOn ? setfIzzBuzzOn(false) : setfIzzBuzzOn(true);
  }

  return (
    <div>
      <div className="fizzbuzz-header">
        <h1>Welcome to FizzBuzz!</h1>
        <h3>Discover which numbers in a chosen range are divisible by 3 (Fizz!) and 5 (Buzz!)</h3>
      </div>
      <div className='fizzbuzz-range-selector-container' data-testid='fizzbuzz-range-slider'>
        <RangeSlider changeHandler={handleSliderChange} value={value}/>
        <span className="fizzbuzz-increment-title">Choose an increment between 1 - 12. </span>
        <RangeIncrementSelector min={min} max={max} increment={increment} changeHandler={handleSelectorChange} />
        <span>  Both min and max values for your selected range must be divisible by an increment for it to appear in the selector list</span>
        <RangeViewer min={min} max={max} increment={increment} fizzBuzzOn={fizzBuzzOn}/>
      </div>
      <button onClick={handleClick} className="fizzbuzz-button">{fizzBuzzOn ? "Remove FizzBuzz!" : "Apply FizzBuzz!" }</button>
    </div>
  )

}
