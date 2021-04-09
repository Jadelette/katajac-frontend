import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

import Home from './Home';


const fakeKataData = {
  "kataList":
    [
      {
        "key": "FizzBuzz",
        "title": "FizzBuzz",
        "description": "blah",
        "path": "/fizzbuzz"
      },
      {
        "key": "ToDoList",
        "title": "ToDoList",
        "description": "blah blah",
        "path": "/bowling"
      }
    ]
}

const emptyKataList = {
  "kataList": []
}

describe("<Home >", () => {
  describe("When we have data", () => {
    describe("Renders site header", () => {
      it('renders title bar', async () => {
        setup(fakeKataData);
        const element = await screen.findByText(/katajac/i);
        expect(element).toBeInTheDocument();
      });

      it('renders site description', async () => {
        setup(fakeKataData);
        const element = await screen.findByText(
          "An online portfolio, built to showcase the functionality of katas that I have completed as part of my learning and development.");
        expect(element).toBeInTheDocument();
      });
    });

    describe("Renders site content", () => {
      it('renders links to two katas', async () => {
        setup(fakeKataData);
        const kataMenu = await screen.findByTestId('kata-menu')
        const kataBadges = kataMenu.childNodes;
        expect(kataMenu).toBeInTheDocument();
        expect(kataBadges.length).toBe(2);
        expect(kataBadges[0].textContent).toContain("FizzBuzz");
        expect(kataBadges[1].textContent).toContain("ToDoList");
      });
    });
  });

  describe("When no data is available", () => {
    describe("Renders site header", () => {
      it('renders title bar', async () => {
        setup(emptyKataList);
        const element = await screen.findByText(/katajac/i);
        expect(element).toBeInTheDocument();
      });

      it('renders site description', async () => {
        setup(emptyKataList);
        const element = await screen.findByText(
          "An online portfolio, built to showcase the functionality of katas that I have completed as part of my learning and development.");
        expect(element).toBeInTheDocument();
      });
    });

    describe("Renders site content", () => {
      it('renders links to two katas', async () => {
        setup(emptyKataList);
        const element = await screen.findByText(/nothing to see here - katas coming soon!/i);
        expect(element).toBeInTheDocument();
      });
    });
  });
});

function setup(data) {
  const history = createMemoryHistory();
  render(<Router history={history}><Home data={data}/></Router>)
}