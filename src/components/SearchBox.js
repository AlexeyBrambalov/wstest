import React, { useContext } from "react";
import { FormControl } from "react-bootstrap";
import { DataContext } from "../DataContext/DataContext";

export default function SearchBox() {
  const { filterData, setFilterData } = useContext(DataContext);

  const handleChange = (e) => setFilterData(e.target.value);
  return (
    <FormControl
      placeholder="Filter"
      aria-label="Filter"
      aria-describedby="basic-addon1"
      value={filterData}
      data-testid="filter-input"
      onChange={handleChange}
    />
  );
}
