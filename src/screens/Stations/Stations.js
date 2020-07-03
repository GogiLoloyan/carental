import React, { Fragment } from 'react';
import { ServicesBackground as Background } from 'components/backgrounds';

/**
 * Stations component
 * @returns {React.Node} - stations component
 */
const Stations = () => {
	return (
		<Fragment>
			<Background image={false} />
			<section className="stations main-content"></section>
		</Fragment>
	);
};

export default Stations;
