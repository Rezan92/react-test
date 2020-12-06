import React from "react";

const Module = ({ moduleName, state }) => {
  const module = state[0];
  const setModule = state[1];
  return (
    <div>
      <label>
        {moduleName}
        <input
          type="number"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Module;
