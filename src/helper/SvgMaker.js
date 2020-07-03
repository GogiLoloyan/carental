import React from 'react';
import PropTypes from 'prop-types';


/**
 * SVG icon maker
 * @param {Object} props - props
 * @returns {React.Node} - svg with concret path
 */
const SvgMaker = ({ icon }) => {
	const renderGraphic = () => {
		switch (icon) {
			case 'arrow':
				return (
					<path d="M12 14.071L8.179 10.25a1.061 1.061 0 00-1.5 1.5l4.614 4.614a.999.999 0 001.414 0l4.614-4.614a1.061 1.061 0 00-1.5-1.5L12 14.071z" />
				);
			case 'arrow-long':
				return (
					<path d="M12 3a1 1 0 00-1 1v13.07l-3.863-3.863a.999.999 0 00-1.414 0l-.086.086a.999.999 0 000 1.414l5.656 5.656a.999.999 0 001.414 0l5.656-5.656a.999.999 0 000-1.414l-.086-.086a.999.999 0 00-1.414 0L13 17.07V4a1 1 0 00-1-1z" />
				);
			default:
				return (
					<path d="M12 14.071L8.179 10.25a1.061 1.061 0 00-1.5 1.5l4.614 4.614a.999.999 0 001.414 0l4.614-4.614a1.061 1.061 0 00-1.5-1.5L12 14.071z" />
				);
		}
	};

	const styles = {
		overflow: 'initial'
	};

	return (
		<svg viewBox="0 0 24 24" focusable="false" style={styles}>
			{renderGraphic()}
		</svg>
	);
};

SvgMaker.propTypes = {
	icon: PropTypes.string.isRequired
};

export default SvgMaker;
