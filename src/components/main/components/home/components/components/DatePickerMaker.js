import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import SvgMaker from "../../../../../../helper/SvgMaker";

const DatePickerMaker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const changeLeftPositionToCenter = date => {
    const distanceLeft = date === "up-date" ? "50%" : "calc(100% / 6 * 5)";
    document.body.style.setProperty("--home-calendar-left", distanceLeft);
  };

  const MakeCalendar = React.forwardRef(({ value, onClick, data }, ref) => (
    <div
      className={`tools__${data.className} tool`}
      onClick={() => {
        changeLeftPositionToCenter(data.className);
        onClick();
      }}
    >
      <p>{value || data.text}</p>
      <SvgMaker icon="arrow-short" />
    </div>
  ));
  
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        customInput={<MakeCalendar data={btns[0]} />}
      />
      <DatePicker
        selected={startDate > endDate ? null : endDate}
        onChange={date => setEndDate(date)}
        minDate={startDate || new Date()}
        customInput={<MakeCalendar data={btns[1]} />}
      />
    </>
  );
};

const btns = [
  {
    text: "Pick up date",
    className: "up-date"
  },
  {
    text: "Return date",
    className: "return-date"
  }
];

export default DatePickerMaker;
