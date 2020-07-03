import React, { Fragment } from 'react';
import { HomeBackground as Background } from 'components/backgrounds';

/**
 * Vehicles component
 * @returns {React.Node} - vehicles component
 */
const Vehicles = () => {
	return (
		<Fragment>
			<Background />
			<section className="vehicles main-content"></section>
		</Fragment>
	);
};

export default Vehicles;
