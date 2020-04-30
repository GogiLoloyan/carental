import React from "react";
import DatePickerMaker from "./DatePickerMaker";
import SvgMaker from "../../../../../../helper/SvgMaker";

const Tools = () => (
  <div className="tools">
    <div className="tools__geo tool">
      <p>Pick up</p>
      <SvgMaker icon="arrow-short" />
    </div>
    <DatePickerMaker />
  </div>
);

export default Tools;
