import React from 'react';
import PropTypes from 'prop-types';
import { SliderWrapper, Slider, Thumb, Track, Dot } from './styles';

/**
 * LeftNav component
 * @returns {React.Node} - left nav component
 */
const LeftNav = ({ currentPageNumber }) => (
	<SliderWrapper>
		<Slider>
			<Track>
				{[...Array(12)].map((_, i) => (
					<Dot key={i} />
				))}
			</Track>
			<Thumb value={`0${currentPageNumber}`} />
		</Slider>
	</SliderWrapper>
);

LeftNav.propTypes = {
	currentPageNumber: PropTypes.number.isRequired
};

export default LeftNav;
