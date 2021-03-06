import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

export default function RangeSlider({value, changeHandler}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
