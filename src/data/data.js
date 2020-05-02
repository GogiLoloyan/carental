import React from "react";
import SvgMaker from "../helper/SvgMaker";

const svg = <SvgMaker icon="arrow-short" />;

export const serchFreeCarsTools = {
  pickUp: {
    text: "Pick up:",
    className: "geo",
    svg,
    type: "select"
  },
  pickUpDate: {
    text: "Pick up date:",
    className: "up-date",
    svg,
    type: "date"
  },
  returnDate: {
    text: "Return date:",
    className: "return-date",
    svg,
    type: "date"
  }
};

export const optionsForSerchFreeCarsSelect = [
  { city: "Erevan", active: true },
  { city: "Gyumri", active: true },
  { city: "Abovyan", active: false },
  { city: "Vanadzor", active: false }
];
