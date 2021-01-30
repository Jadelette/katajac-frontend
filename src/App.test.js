import React from 'react';
import user from "@testing-library/user-event";
import {render, screen, waitFor} from '@testing-library/react';
import {createMemoryHistory} from "history";
import {Route, Router} from 'react-router-dom';

import App from './App';

//TODO: test various routes with data
it('renders dashboard with links to katas as home page, given path /', async() => {
  const history = createMemoryHistory()
  const { findByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(await findByText('Katajac')).toBeInTheDocument();
  expect(await findByText('An online portfolio, built to showcase the functionality of katas that I have completed as part of my learning and development.')).toBeInTheDocument();
})

it('renders FizzBuzz kata landing page if given path /fizzbuzz', async() => {
  const history = createMemoryHistory({
    initialEntries: ["/"],
    initialIndex: 0,
  })
  const { findByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  await screen.findByText("FizzBuzz");
  const link = await  screen.findByRole("link", {name: /fizzbuzz/i});

  user.click(link);

  expect(await findByText('FizzBuzz: Placeholder')).toBeInTheDocument();
})