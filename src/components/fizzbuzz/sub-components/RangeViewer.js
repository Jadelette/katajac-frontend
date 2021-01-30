import React from 'react';
import { range } from 'lodash';

export default function RangeViewer(props) {
  let selectedRange = range(props.min,props.max+1, props.increment);
  return <div>
    <p>{selectedRange.join(", ")}</p>
  </div>
}