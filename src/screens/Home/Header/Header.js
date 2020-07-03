import React from 'react';

import { HomeHeader, H1, H2, Help, Wrapper, Description } from './styles';
import { parentMotion, childrenMotion } from './motion';

/**
 * Home header component
 * @returns {React.Node} - home header component
 */
const Header = () => (
	<HomeHeader {...parentMotion}>
		<H1 {...childrenMotion}>Car Rental</H1>
		<Help {...childrenMotion}>helps you</Help>
		<Wrapper>
			<H2 {...childrenMotion}>Here you can rent a car of any brand</H2>
			<Description {...childrenMotion}>
				The Car Rental revolution: no more paperwork or endless waiting lines,
				<br />
				premium cars guaranteed and your virtual key diractly in your
				smartphone!
			</Description>
		</Wrapper>
	</HomeHeader>
);

export default Header;
