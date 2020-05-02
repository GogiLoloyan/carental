import React from "react";
import DatePicker from "react-datepicker";
import Select from "./myCostumSelect";
import Resource from "./Resource";
import { serchFreeCarsTools as toolsData } from "../../../../../../data/data";

const Tools = ({ $pickUp, $pickUpDate, $returnDate, displayError }) => {
  const { pickUp, pickUpDate, returnDate } = toolsData;

  //compare two dates to be sure that these are sorted by ascending
  const compareDate = (up, ret) => ret && up > ret && $returnDate.set("");

  return (
    <div className="tools">
      <Select
        selected={$pickUp.value}
        onChange={selected => $pickUp.set(selected)}
        customInput={
          <Resource data={{ ...pickUp, error: $pickUp.error, displayError }} />
        }
      />
      <DatePicker
        selected={$pickUpDate.value}
        onChange={date => {
          $pickUpDate.set(date);
          compareDate(date, $returnDate.value);
        }}
        minDate={new Date()}
        customInput={
          <Resource
            data={{ ...pickUpDate, error: $pickUpDate.error, displayError }}
          />
        }
      />
      <DatePicker
        selected={$returnDate.value}
        onChange={date => $returnDate.set(date)}
        minDate={$pickUpDate.value || new Date()}
        customInput={
          <Resource
            data={{ ...returnDate, error: $returnDate.error, displayError }}
          />
        }
      />
    </div>
  );
};

export default Tools;
