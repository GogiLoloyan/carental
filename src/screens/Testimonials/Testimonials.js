import React, { Fragment } from 'react';
import { HomeBackground as Background } from 'Components/backgrounds';

/**
 * Testimonials component
 * @returns {React.Node} - testimonials component
 */
const Testimonials = () => {
	return (
		<Fragment>
			<Background />
			<section className="testimonials main-content"></section>
		</Fragment>
	);
};

export default Testimonials;
