import React from "react";
import ReactDOM from "react-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from "rsuite";

const TestCal = () => {
  return (
    <>
      <DateRangePicker />
    </>
  );
};

export default TestCal;
