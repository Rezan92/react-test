import React, { useContext } from "react";
import { getBarChartUrl } from "../util/getChartUrl";
import { chartContext } from "../components/Context";

const Bar = () => {
  const [chartValues, setChartValues] = useContext(chartContext);
  return (
    <div>
      <img src={getBarChartUrl(chartValues)} />
    </div>
  );
};

export default Bar;
