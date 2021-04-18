import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import SearchBox from "../SearchBox";
import { DataContext, DataProvider } from "../../DataContext/DataContext";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(
    <DataProvider>
      <SearchBox />
    </DataProvider>
  );

  expect(queryByTestId("filter-input")).toBeTruthy();
  expect(queryByPlaceholderText("Filter")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(
      <DataProvider>
        <SearchBox />
      </DataProvider>
    );

    const filterInput = queryByPlaceholderText("Filter");

    fireEvent.change(filterInput, { target: { value: "test" } });

    expect(filterInput.value).toBe("test");
  });
});

describe("Filter function", () => {
  it("with empty query", () => {
    const setFilterData = jest.fn();
    const { queryByPlaceholderText } = render(
      <DataProvider>
        <SearchBox />
      </DataProvider>
    );
    const filterInput = queryByPlaceholderText("Filter");
    fireEvent.change(filterInput, { target: { value: "" } });
    expect(setFilterData).not.toHaveBeenCalled();
  });
  it("with not empty query", () => {
    const mocksetFilterData = jest.fn();

    const { queryByPlaceholderText } = render(
      <DataContext.Provider value={{ setFilterData: mocksetFilterData }}>
        <SearchBox />
      </DataContext.Provider>
    );
    const filterInput = queryByPlaceholderText("Filter");
    fireEvent.change(filterInput, { target: { value: "test" } });
    expect(mocksetFilterData).toHaveBeenCalled();
  });
});
