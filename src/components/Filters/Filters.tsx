import React from 'react';
import { useState } from "react";
import "./filters.scss";

interface FiltersInterface {
  hops: string[];
  setAbvFilter: (param: string) => void;
  setHopFilter: (param: string) => void;
  handleClick: () => void;
  goHome: () => void;
}

const Filters = (props: FiltersInterface) => {
  const { setAbvFilter, setHopFilter, handleClick, goHome, hops } = props;

  const [abvSelected, setAbvSelected] = useState<string>("Select a value");
  const [hopSelected, setHopSelected] = useState<string>("Select a hop");

  let options = [];
  for (let i = 4; i < 14; i++) {
    options.push(`${i}%`);
  }

  return (
    <div className="filterContainer">
      <h4 className="filterHeader">Filter beers by ABV(%)</h4>
      <select
        value={abvSelected}
        className="select"
        onChange={(e) => {
          setAbvFilter(e.target.value);
          setAbvSelected(e.target.value);
        }}
      >
        <option key={0} defaultValue="selected" className="disabled" disabled>
          Select a value
        </option>
        {options.map((option) => (
          <option key={option + 1} value={option}>
            {option} &#62;
          </option>
        ))}
      </select>
      <h4 className="filterHeader">Filter beers by hop</h4>
      <select
        value={hopSelected}
        className="select"
        onChange={(e) => {
          setHopFilter(e.target.value);
          setHopSelected(e.target.value);
        }}
      >
        <option key={1} defaultValue="selected" className="disabled" disabled>
          Select a hop
        </option>
        {hops.map((hop) => (
          <option key={hops.indexOf(hop) + 1}>{hop}</option>
        ))}
      </select>
      <button onClick={handleClick}>Filter</button>
      <button
        onClick={() => {
          goHome();
          setAbvSelected("Select a value");
          setHopSelected("Select a hop");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Filters;
