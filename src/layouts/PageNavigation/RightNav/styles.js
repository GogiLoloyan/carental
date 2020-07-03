import { NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { createKeyboardOnlyFocus } from 'utils';

const ticking = keyframes`
		from {
			top: 0;
		}
		50% {
			top: calc(var(--order) * -0.2em);
		}
		to {
			top: 0;
		}
`;

const Text = styled.p.attrs({ tabIndex: '-1' })`
	${({ iscontactpage }) => css`
		--deg: ${iscontactpage ? '' : '180deg'};
		--order: ${iscontactpage ? 1 : -1};
		--flex-direction: ${iscontactpage ? 'row' : 'row-reverse'};
		--span-margin-top: ${iscontactpage ? '' : '1.5em'};
	`}

	display: flex;
	flex-direction: var(--flex-direction);
	align-items: center;

	position: relative;
	font-size: 1em;
	font-weight: 500;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: var(--white);

	/* rotate text vertical */
	writing-mode: vertical-rl;
	transform: rotate(180deg);

	span {
		margin: 0.4em 0;
		margin-top: var(--span-margin-top);
	}

	svg {
		position: relative;
		width: 1em;
		height: 1em;
		fill: var(--white);
		transform: rotate(var(--deg)) translateY(-80%);
		animation: ${ticking} 1s ease-in-out infinite var(--play-tcking, paused);
	}

	&:hover {
		svg {
			--play-tcking: running;
		}
	}
`;

const StyledNavlink = styled(NavLink)`
	text-decoration: none;
	font-size: var(--p);

	${createKeyboardOnlyFocus(Text)}
`;

const NavLinkWrapper = styled.div`
	grid-area: right;
	display: grid;
	place-content: center;
	z-index: 1000;
`;

export { NavLinkWrapper, StyledNavlink, Text };
