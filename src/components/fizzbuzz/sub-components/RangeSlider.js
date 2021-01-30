import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

export default function RangeSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Select range on which to perform FizzBuzz check
      </Typography>
      <Slider
        value={props.value}
        onChange={props.changeHandler}
        valueLabelDisplay="auto"
        max={1000}
      />
    </div>
  );
}
