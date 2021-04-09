import React from 'react';

export default function TaskList({tasks}) {
  return (
    tasks.length > 0 ?
    tasks.map((task, i) => <p key={i}>{task}</p>) :
      <p> Nothing to see here! Click add to enter tasks.</p>
  );
}