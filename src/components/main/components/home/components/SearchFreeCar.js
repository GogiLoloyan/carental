import React from "react";
import Tools from "./components/Tools";
import SearchButton from "./components/SearchButton";
import StateValidationWrapper from "./StateValidationWrapper";

const SearchFreeCar = () => (
  <StateValidationWrapper>
    {({ state, onSubmit }) => (
      <section className="home__search">
        <Tools {...state} />
        <SearchButton onClick={onSubmit} />
      </section>
    )}
  </StateValidationWrapper>
);

export default SearchFreeCar;
