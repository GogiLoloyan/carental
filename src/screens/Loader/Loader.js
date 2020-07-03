import React from 'react';
import {
	LoaderBackground,
	LogoLetters,
	StartLetters,
	DesignLetterWrapper,
	DesignLetterBorder,
	DesignLetter,
	EndLetters
} from './styles';


/**
 * Loader component
 * @returns {React.Node} - looader component
 */
const Loader = () => (
	<LoaderBackground>
		<LogoLetters>
			{/* [ca]rental */}
			<StartLetters>ca</StartLetters>
			{/* ca[r]ental */}
			<DesignLetterWrapper>
				<DesignLetterBorder />
				<DesignLetter>r</DesignLetter>
			</DesignLetterWrapper>
			{/* car[ental] */}
			<EndLetters>ental</EndLetters>
		</LogoLetters>
	</LoaderBackground>
);

export default Loader;
