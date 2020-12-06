import React, { createContext, useState } from "react";
const state = [];
export const chartContext = createContext(state);

export const ChartProvider = (props) => {
  const [chartValues, setChartValues] = useState(state);

  return (
    <chartContext.Provider value={[chartValues, setChartValues]}>
      {props.children}
    </chartContext.Provider>
  );
};
