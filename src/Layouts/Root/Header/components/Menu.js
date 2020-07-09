import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { createKeyboardOnlyFocus } from 'Utils';

const Menu = styled.ul`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	margin-right: 6vw;
	list-style: none;

	@media (max-width: 1024px) {
		display: none;
	}
`;

Menu.Item = styled.li`
	padding: 0 20px;
	--text-color: var(--white);
	--theme: ${({ theme: { color } }) => color};
`;

const P = styled.p.attrs(() => ({ tabIndex: '-1' }))`
	font-size: var(--p);
	font-weight: 500;
	letter-spacing: 0.5px;
	color: var(--text-color);
	text-transform: uppercase;
`;

const StyledNavLink = styled(NavLink).attrs(() => ({
	activeClassName: 'active'
}))`
	text-decoration: none;

	&.active {
		--text-color: var(--theme);
	}

	${createKeyboardOnlyFocus(P, 'menu-text')}
`;

export { Menu, StyledNavLink, P };
