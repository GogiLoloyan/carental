import React, { useState, useRef, forwardRef, cloneElement } from "react";
import PropTypes from "prop-types";
import useOutsideClickClose from "../../../../../../helper/useOutsideClickClose";
import { optionsForSerchFreeCarsSelect as options } from "../../../../../../data/data";

const Select = ({ selected, onChange, customInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef(null);
  useOutsideClickClose(targetRef, setIsOpen);

  const handlOnClick = value => {
    setIsOpen(!isOpen);
    onChange(value);
  };

  return (
    <>
      {isOpen ? (
        <Menu ref={targetRef} onClick={handlOnClick} selected={selected} />
      ) : null}
      {cloneElement(customInput, {
        onClick: () => setIsOpen(!isOpen),
        value: selected
      })}
    </>
  );
};

const Menu = forwardRef(({ onClick, selected }, ref) => (
  <div className="select-menu" ref={ref}>
    {options.length ? (
      <ul className="select-menu__list">
        {options.map(({ city, active }) => (
          <li
            className="select-menu__list__item"
            onClick={e => active && onClick(e.target.innerText)}
            data-selected={city === selected}
            data-active={active}
            key={city}
          >
            <span>{city}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="select-menu__no-value">No select</p>
    )}
  </div>
));

Select.propTypes = {
  customInput: PropTypes.element.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired
};

export default Select;
