import styled from 'styled-components';
import { createKeyboardOnlyFocus } from 'Utils';

const Hamburger = styled.div.attrs(() => ({ tabIndex: '-1' }))`
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

	${Hamburger}:hover & {
		width: ${({ top }) => (top ? '100%' : '70%')};
	}
`;

Hamburger.Wrapper = styled.div.attrs(() => ({ tabIndex: '0' }))`
	${createKeyboardOnlyFocus(Hamburger)}
`;

export { Hamburger, Bar };
