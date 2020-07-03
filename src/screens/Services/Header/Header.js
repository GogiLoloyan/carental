import React from 'react';

import { Wrapper, Title, Description } from './styles';
import { parentMotion, childrenMotion } from './motion';

/**
 * Services header component
 * @returns {React.Node} - services header component
 */
const Header = () => (
	<Wrapper {...parentMotion}>
		<Title {...childrenMotion}>Our services</Title>
		<Description {...childrenMotion}>
			We are offering a variety of cars, services, and
			<br /> partnerships to meet all your travel needs
		</Description>
	</Wrapper>
);

export default Header;
