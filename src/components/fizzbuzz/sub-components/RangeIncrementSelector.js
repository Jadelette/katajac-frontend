import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RangeIncrementSelector(props) {
  const classes = useStyles();
  const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  function generateMenuOptions() {
    const options = possibleValues.filter((value => props.min % value === 0 && props.max % value === 0))
    return options.map(option => {
      return <MenuItem key={option} value={option}>{option}</MenuItem>
    })
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="increment-select-label">Increment</InputLabel>
        <Select
          value={props.increment}
          labelId="increment-select-label"
          onChange={props.changeHandler}
        >
          <MenuItem value="" disabled>
            Select increment
          </MenuItem>
          {generateMenuOptions()}
        </Select>
      </FormControl>
    </div>
  )
}