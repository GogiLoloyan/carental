import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 100000;

	display: flex;
	align-items: center;
	justify-content: center;

	form {
		display: grid;
		grid-row-gap: 0.5em;
	}
`;
