import React, { Fragment } from 'react';

import { TranslateYMotion } from 'Motion/layouts';
import { HomeBackground as Background } from 'Components/backgrounds';

import SearchForm from './SearchForm';
import Header from './Header';

import { Section } from './styles';


/**
 * Home component
 * @returns {React.Node} - home component
 */
const Home = () => (
	<Fragment>
		<Background />
		<Section>
			<Header />
			<TranslateYMotion>
				<SearchForm />
			</TranslateYMotion>
		</Section>
	</Fragment>
);

export default Home;
