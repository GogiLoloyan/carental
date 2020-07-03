import React, { useState, useRef, forwardRef, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { optionsForSerchFreeCarsSelect as options } from 'Data/data';
import { useOutsideClickClose } from 'Hooks';


const Select = ({ selected: value, onChange, customInput }) => {
  const [isOpen, setOpen] = useState(false);
	const targetRef = useRef(null);
	useOutsideClickClose(targetRef, setOpen);

	const handlOnClick = value => {
		setOpen(!isOpen);
		onChange(value);
	};

	return (
		<>
			{isOpen ? (
				<Menu ref={targetRef} onClick={handlOnClick} selected={value} />
			) : null}
			{cloneElement(customInput, {
				onClick: () => setOpen(!isOpen),
				value
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
