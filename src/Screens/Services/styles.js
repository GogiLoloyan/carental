import styled from 'styled-components';

const Section = styled.section.attrs(() => ({ className: 'main-content' }))`
	height: 100%;
	display: grid;
	grid-column-gap: 2vw;
	grid-template-rows: repeat(12, 1fr);
	grid-template-columns: repeat(2, 1fr);
`;

export { Section };
