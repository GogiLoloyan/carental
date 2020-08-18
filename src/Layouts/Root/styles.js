import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-rows: 57px 1fr;
	grid-template-areas:
		'navbar'
		'content';
`;

export const Main = styled.main`
	grid-area: content;
	display: grid;
	grid-template-columns: 5vw 1fr 5vw;
	grid-template-rows: 100%;
	grid-template-areas: 'left content right';
`;
