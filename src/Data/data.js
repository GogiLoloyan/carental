import React from "react";
import SvgMaker from "../helper/SvgMaker";

const svg = <SvgMaker icon="arrow" />;

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
  { city: "Erevan", isActive: true },
  { city: "Gyumri", isActive: true },
  { city: "Abovyan", isActive: false },
  { city: "Vanadzor", isActive: false }
];
