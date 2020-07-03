import React, { Fragment } from 'react';
import { ServicesBackground as Background } from 'components/backgrounds';

/**
 * Our benefits component
 * @returns {React.Node} - our benefits component
 */
const OurBenefits = () => {
	return (
		<Fragment>
			<Background image={false} />
			<section className="our-benefits main-content"></section>
		</Fragment>
	);
};

export default OurBenefits;
