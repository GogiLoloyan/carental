import styled from 'styled-components';

const Nav = styled.nav`
	grid-area: navbar;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0 2.5vw;
	align-self: flex-end;
	z-index: 2000;
`;

/* Export everything */
export { Nav };
