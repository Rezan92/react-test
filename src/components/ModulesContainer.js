import React, { useState, useContext, useEffect } from "react";
import MODULES from "../modules";
import Module from "./Module";
import { chartContext } from "./Context";

const ModulesContainer = () => {
  const [htmlCss, setHtmlCss] = useState(Math.floor(Math.random() * 11));
  const [js1, setJs1] = useState(Math.floor(Math.random() * 11));
  const [js2, setJs2] = useState(Math.floor(Math.random() * 11));
  const [js3, setJs3] = useState(Math.floor(Math.random() * 11));
  const [nodeJs, setNodeJs] = useState(Math.floor(Math.random() * 11));
  const [databases, setDatabases] = useState(Math.floor(Math.random() * 11));
  const [reactm, setReactm] = useState(Math.floor(Math.random() * 11));

  const [chartValues, setChartValues] = useContext(chartContext);

  useEffect(() => {
    setChartValues([
      parseFloat(htmlCss || 0),
      parseFloat(js1 || 0),
      parseFloat(js2 || 0),
      parseFloat(js3 || 0),
      parseFloat(nodeJs || 0),
      parseFloat(databases || 0),
      parseFloat(reactm || 0),
    ]);
  }, [htmlCss, js1, js2, js3, nodeJs, databases, reactm]);

  const statePicker = (module) => {
    switch (module) {
      case "HTML/CSS":
        return [htmlCss, setHtmlCss];
      case "JS1":
        return [js1, setJs1];
      case "JS2":
        return [js2, setJs2];
      case "JS3":
        return [js3, setJs3];
      case "NodeJS":
        return [nodeJs, setNodeJs];
      case "Databases":
        return [databases, setDatabases];
      case "React":
        return [reactm, setReactm];
      default:
        return 0;
    }
  };

  return (
    <div>
      {MODULES.map((module, i) => (
        <Module key={i} moduleName={module} state={statePicker(module)} />
      ))}
    </div>
  );
};

export default ModulesContainer;
