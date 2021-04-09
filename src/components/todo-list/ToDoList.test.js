import React from 'react';
import {render, screen} from '@testing-library/react';

import ToDoList from './ToDoList';

describe('<ToDoList>', () => {
  it('renders a page title', async () => {
    render(<ToDoList/>)

    const pageHeading = await screen.findByText(/weekly task planner/i)

    expect(pageHeading).toBeInTheDocument();
  })

  it('renders a page description', async () => {
    render(<ToDoList/>)

    const description = await screen.findByText(/keep track of your progress/i)

    expect(description).toBeInTheDocument();
  })
});