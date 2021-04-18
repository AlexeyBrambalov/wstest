import React, { useContext } from "react";
import { DataContext } from "../DataContext/DataContext";

export default function CardFooter() {
  const { stateData, filterData } = useContext(DataContext);
  return (
    <footer className="d-flex justify-content-end mr-3 mb-3">
      Number of news:{" "}
      {stateData.filter((text) => text.indexOf(filterData) >= 0).length}
    </footer>
  );
}
