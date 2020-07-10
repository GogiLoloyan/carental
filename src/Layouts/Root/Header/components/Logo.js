import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { createKeyboardOnlyFocus } from 'Utils';

const Letters = styled.h3.attrs(() => ({ tabIndex: '-1' }))`
	display: flex;
	align-items: center;
	font-size: var(--h3);
	font-weight: 300;
	color: var(--white);
	text-transform: uppercase;
	letter-spacing: 3px;
`;

const DesignedLetter = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.5em;
	height: 1.5em;
	border: 1px solid var(--theme);
	color: var(--theme);
	margin: 0 4px;
`;

const LogoLink = styled(Link)`
	padding-left: 5px;
	text-decoration: none;

	${createKeyboardOnlyFocus(Letters)}
`;

/* Export everything */
export { LogoLink, DesignedLetter, Letters };
