import data from "../data.json";
import newData from "../newData.json";

import React, { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [stateData, setStateData] = useState(data.news);

  const [displayData, setDisplayData] = useState([]);

  const [oldStateData, setOldStateData] = useState(newData.news);

  const [step, setStep] = useState(1);

  const [filterData, setFilterData] = useState("");

  const [paginationLength, setPaginationLength] = useState();

  return (
    <DataContext.Provider
      value={{
        stateData,
        setStateData,
        displayData,
        setDisplayData,
        oldStateData,
        setOldStateData,
        step,
        setStep,
        filterData,
        setFilterData,
        paginationLength,
        setPaginationLength,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
