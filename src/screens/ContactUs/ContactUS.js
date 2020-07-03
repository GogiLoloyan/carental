import React, { Fragment } from 'react';
import { ServicesBackground as Background } from 'components/backgrounds';

/**
 * Contact us component
 * @returns {React.Node} - contact us component
 */
const ContactUS = () => {
	return (
		<Fragment>
			<Background image={false} />
			<section className="contact-us main-content"></section>
		</Fragment>
	);
};

export default ContactUS;

