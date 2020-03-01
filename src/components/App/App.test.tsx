import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  expect(getByText("Create balance")).toBeTruthy();
});
