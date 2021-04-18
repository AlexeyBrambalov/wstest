import React, { useContext, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { DataContext } from "../DataContext/DataContext";

export default function PaginationComponent() {
  const {
    stateData,
    filterData,
    step,
    setStep,
    paginationLength,
    setPaginationLength,
  } = useContext(DataContext);

  useEffect(() => {
    setPaginationLength(
      Math.ceil(
        stateData.filter((text) => text.indexOf(filterData) >= 0).length / 2
      )
    );
    // eslint-disable-next-line
  }, [stateData, filterData]);

  const handleClick = (e) => {
    setStep(Number(e.target.outerText));
  };

  let items = [];
  for (let number = 1; number <= paginationLength; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === step}
        onClick={handleClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}
