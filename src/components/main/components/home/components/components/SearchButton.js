import React from "react";

const SearchButton = props => (
  <button {...props} className="btn-search" tabIndex="0">
    <div className="btn-search__inner" tabIndex="-1">
      search
    </div>
  </button>
);

export default SearchButton;
