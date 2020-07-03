import React, { Fragment } from 'react';

import { ServicesBackground as Background } from 'Components/backgrounds';

import Cards from './Cards';
import Header from './Header';

import { Section } from './styles';


/**
 * Services component
 * @returns {React.Node} - services component
 */
const Services = () => (
	<Fragment>
		<Background />
		<Section>
			<Header />
			<Cards />
		</Section>
	</Fragment>
);

export default Services;
