import styled from 'styled-components';
import { createKeyboardOnlyFocus } from 'Utils';

const Text = styled.span.attrs(() => ({ tabIndex: '-1' }))`
	height: 100%;
	display: grid;
	place-content: center;
	background-color: var(--blue);
	background-image: radial-gradient(
		100px at 100% 60%,
		#311ca1,
		transparent 267%
	);
	font-size: var(--p);
	font-weight: 500;
	text-transform: uppercase;
	color: var(--white);

	&:hover {
		background-color: var(--purple);
		background-image: radial-gradient(
			100px at 100% 60%,
			#23113fab,
			transparent 267%
		);
		box-shadow: 0px 0px 3vh 0px #201131d3;
	}
`;

const SearchButton = styled.button`
	position: relative;
	height: 100%;
	width: 12vw;
	min-width: 20vh;
	border: none;
	cursor: pointer;
	background: transparent;

	${createKeyboardOnlyFocus(Text, 'home-button')}
`;

export { SearchButton, Text };
