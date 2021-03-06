import React from 'react';
import RangeSlider from "./RangeSlider/RangeSlider";

import './FizzBuzz.scss';
import RangeViewer from "./RangeViewer/RangeViewer";
import RangeIncrementSelector from "./RangeIncrementSelector/RangeIncrementSelector";

export default function FizzBuzz() {
  const [value, setValue] = React.useState([1, 100]);
  const [min, setMin] = React.useState(1)
  const [max, setMax] = React.useState(100)
  const [increment, setIncrement] = React.useState(1)
  const [fizzBuzzOn, setFizzBuzzOn] = React.useState(false);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setMin(Math.min(...newValue))
    setMax(Math.max(...newValue))
    setIncrement(1)
  };

  const handleSelectorChange = (event) => {
    setIncrement(event.target.value)
  }

  const handleClick = () => {
    fizzBuzzOn ? setFizzBuzzOn(false) : setFizzBuzzOn(true);
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
