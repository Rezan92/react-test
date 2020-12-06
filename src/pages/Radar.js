import React, { useContext } from "react";
import { getRadarChartUrl } from "../util/getChartUrl";
import { chartContext } from "../components/Context";

const Radar = () => {
  const [chartValues, setChartValues] = useContext(chartContext);
  return (
    <div>
      <img src={getRadarChartUrl(chartValues)} />
    </div>
  );
};

export default Radar;
