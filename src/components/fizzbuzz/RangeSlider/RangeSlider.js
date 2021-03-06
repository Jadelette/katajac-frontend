import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function RangeSlider({value, changeHandler}) {
  return (
    <div className={"root"}>
      <Typography id="range-slider" gutterBottom>
        Select range on which to perform FizzBuzz analysis
      </Typography>
      <Slider
        value={value}
        onChange={changeHandler}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
    </div>
  );
}
