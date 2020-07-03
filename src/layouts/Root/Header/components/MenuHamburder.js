import styled from 'styled-components';
import { createKeyboardOnlyFocus } from 'utils';

const MenuHamburger = styled.div`
	width: 25px;
	height: 13px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
`;

const Bar = styled.div`
	height: 3px;
	width: ${({ top }) => (top ? '70%' : '100%')};
	background-color: var(--white);
	transition: width 0.2s;

	${MenuHamburger}:hover & {
		width: ${({ top }) => (top ? '100%' : '70%')};
	}
`;

const KeyboardOnlyFocus = styled.div`
	${createKeyboardOnlyFocus(MenuHamburger)}
`;

export { MenuHamburger, Bar, KeyboardOnlyFocus };
