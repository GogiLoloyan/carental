import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { createKeyboardOnlyFocus } from 'Utils';

const MenuList = styled.ul`
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-right: 6vw;
	list-style: none;

	@media (max-width: 1024px) {
		display: none;
	}
`;

const MenuItem = styled.li`
	padding: 0 20px;
	--text-color: var(--white);
	--theme: ${({ theme: { color } }) => color};
`;

const Text = styled.p`
	font-size: var(--p);
	font-weight: 500;
	letter-spacing: 0.5px;
	color: var(--text-color);
	text-transform: uppercase;
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;

	&.${props => props.activeClassName} {
		--text-color: var(--theme);
	}

	${createKeyboardOnlyFocus(Text, "menu-text")}
`;

export { MenuList, MenuItem, StyledNavLink, Text };
