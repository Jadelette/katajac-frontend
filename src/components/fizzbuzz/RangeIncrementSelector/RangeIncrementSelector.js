import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateMenuOptions(min, max, possibleValues) {
  const options = possibleValues.filter(value => ensureSliderValuesDivisible(value, min, max));
  return options.map(option => {
    return <MenuItem key={option} value={option}>{option}</MenuItem>
  })
}

function ensureSliderValuesDivisible(value, min, max) {
  return min === 1 ? max % value === 0 : max % value === 0 && min % value === 0
}

export default function RangeIncrementSelector({min, max, increment, changeHandler}) {
  const classes = useStyles();

  const [menuOptions, setMenuOptions] = useState()

  useEffect(() => {
    setMenuOptions(generateMenuOptions(min, max, possibleValues));
  }, [min, max]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="increment-select-label">Increment</InputLabel>
        <Select
          value={increment}
          labelId="increment-select-label"
          onChange={changeHandler}
        >
          <MenuItem value="" disabled>
            Select increment
          </MenuItem>
          {menuOptions}
        </Select>
      </FormControl>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));