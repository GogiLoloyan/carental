import React from 'react';

import { stagger, variants } from 'motion/variants/headerTexts'
import { HomeHeader, H1, H2, Help, Wrapper, Description } from './styles';


/**
 * Home header component
 * @returns {React.Node} - home header component
 */
const Header = () => (
	<HomeHeader
		initial="initial"
		animate="animate"
		exit="exit"
		variants={stagger}
	>
		<H1 variants={variants}>Car Rental</H1>
		<Help variants={variants}>helps you</Help>
		<Wrapper>
			<H2 variants={variants}>Here you can rent a car of any brand</H2>
			<Description variants={variants}>
				The Car Rental revolution: no more paperwork or endless waiting lines,
				<br />
				premium cars guaranteed and your virtual key diractly in your
				smartphone!
			</Description>
		</Wrapper>
	</HomeHeader>
);

export default Header;
