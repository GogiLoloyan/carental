import React, { Fragment } from 'react';

import { ServicesBackground as Background } from 'Components/backgrounds';

import Cards from './Cards';
import Header from './Header';

import { Section } from './styles';
import { FirebaseContext } from 'Components/Firebase';

/**
 * Services component
 * @returns {React.Node} - services component
 */
const Services = () => (
	<Fragment>
		<Background />
		<Section>
			<FirebaseContext.Consumer>
				{({ db }) => (
					<>
						<Header db={db} />
						<Cards />
					</>
				)}
			</FirebaseContext.Consumer>
		</Section>
	</Fragment>
);

export default Services;
