import React from 'react';

import { stagger, variants } from 'motion/variants/headerTexts'
import { ServiceHeader, H1, Description } from './styles';


/**
 * Services header component
 * @returns {React.Node} - services header component
 */
const Header = () => (
	<ServiceHeader
		initial="initial"
		animate="animate"
		exit="exit"
		variants={stagger}
		aria-label="car rental services description"
	>
		<H1 variants={variants}>Our services</H1>
		<Description variants={variants}>
			We are offering a variety of cars, services, and
			<br /> partnerships to meet all your travel needs
		</Description>
	</ServiceHeader>
);

export default Header;
