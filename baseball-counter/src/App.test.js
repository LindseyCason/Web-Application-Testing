import React from "react";
import App from "./App";
import Dashboard from "./components/dashboard"
import { render } from "@testing-library/react";

test("App renders without crashing", () => {
  render(<App />);
});


test("contains balls and strikes", () => {
  //Arrange is const.container render line below
  const container = render(<App />);
  // console.log(container);
  //Act is Getting the node by text getByText
  container.getByText(/balls/i);
  container.getByText(/strikes/i);

  //Assert is getByText
});

test("contains fouls and hits", () => {
  const container = render(<App />);
  container.getByText(/foul/i);
  container.getByText(/hit/i);
});

test("contains fouls and hits", () => {
  const container = render(<Dashboard />);
  console.log(container)
  container.getByText(/foul/i);
  container.getByText(/hit/i);
});






//NOTES BELOW//

// describe("sum function", () => {
//   it("sums two integers", () => {
//     // This is a test block. Note the test runner
//     // is reporting a success. Not so soon!
//     // This test is not done.
//     //ARRANGE
//     let expected = 3;
//     let first = 1;
//     let second = 2;
//     //ACT
//     let actual = sum(first, second);

//     expected = 5;
//     first = 3;
//     second = 2;
//     actual = sum(first, second);
//     expect(actual).toBe(expected);

//     expect(actual).toBe(expected);
//   });
// });