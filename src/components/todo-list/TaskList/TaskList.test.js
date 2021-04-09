import {render, screen} from "@testing-library/react";
import React from "react";
import TaskList from "./TaskList";

describe("the task list", () => {
  it('displays a list of tasks if tasks exist', async () => {
    const tasks = ["Do a thing"]
    render(<TaskList tasks={tasks}/>)

    const task1 = await screen.findByText(/do a thing/i);

    expect(task1).toBeInTheDocument();
  })

  it('does not display any tasks if no task data is provided', async () => {
    render(<TaskList tasks={[]}/>)

    expect(screen.getByText(/Nothing to see here!/)).toBeInTheDocument();
  })
})