import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { DataContext } from "../DataContext/DataContext";

export default function CardBody() {
  const {
    stateData,
    setStateData,
    displayData,
    setDisplayData,
    oldStateData,
    setOldStateData,
    step,
    filterData,
  } = useContext(DataContext);

  useEffect(() => {
    const count = setTimeout(() => {
      const newArray = [oldStateData[0]].concat(stateData);
      const OldArray = oldStateData.slice(1);
      setStateData(newArray);
      setOldStateData(OldArray);
    }, 30000);

    if (oldStateData.length === 0) {
      clearTimeout(count);
    }

    // eslint-disable-next-line
  }, [oldStateData]);

  useEffect(() => {
    setDisplayData(
      stateData
        .filter((text) => text.indexOf(filterData) >= 0)
        .slice(step * 2 - 2, step * 2)
    );
    // eslint-disable-next-line
  }, [stateData, step, filterData]);

  useEffect(() => {
    if (stateData.length > 8) {
      const newArray = stateData.slice(0, -1);
      setStateData(newArray);
    }
    // eslint-disable-next-line
  }, [stateData]);

  return (
    <Card.Body>
      {displayData.map((data, i) => (
        <Card.Text key={i}>{data}</Card.Text>
      ))}
    </Card.Body>
  );
}
