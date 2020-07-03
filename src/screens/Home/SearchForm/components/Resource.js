import React from "react";

/**
 * concated description and selsected (if it isn't empty string)
 * @param   {string} d Description for select value
 * @param   {string} s Selected value
 * @returns {string}   Description with selsected value
 */
const selectedToString = (d, s) => (s ? `${d} ${s}` : d);

/**
 * displaying selected value
 * @param {string} value - Selected value
 * @param {function} onClick - Function for select value
 * @param {object} data - User interface data
 * @returns {element} - React element for displaying selected value
 */
const Resource = React.forwardRef(({ value, onClick, data }, ref) => {
  const { className, text, svg, error, displayError } = data;

  return (
    <div className={`tools__${className} tool`} onClick={onClick}>
      {displayError && <Error error={error} />}
      <CustomInput text={text} value={value} svg={svg} />
    </div>
  );
});

const CustomInput = ({ text, value, svg }) => (
  <>
    <p>{selectedToString(text, value)}</p>
    {svg}
  </>
);

const Error = ({ error }) => <p className="error">{error}</p>;

export default Resource;
