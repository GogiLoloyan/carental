import styled from 'styled-components';

const SliderWrapper = styled.div`
	grid-area: left;
	display: flex;
	align-items: center;
	margin: 0 auto;
	z-index: 1000;
`;

const Slider = styled.div`
	position: relative;
	height: 35%;
	max-height: 250px;
`;

const Thumb = styled.div`
	width: 3px;
	height: calc(calc(100% / 11 * 5) + 3px);
	position: absolute;
	${({ value }) => `top: calc(${Number(value) - 1} * 100% / 11 - 1.5px);`}
	border-radius: 3px;
	background-color: var(--theme);
	transition: top 0.5s ease-in-out, background-color 0.4s ease-out;

	/* current page number */
	&::after {
		content: attr(value);
		position: absolute;
		top: 50%;
		left: 0.6em;
		transform: translateY(-50%);

		font-size: var(--h3);
		font-weight: 300;
		color: var(--theme);
	}

	/* thumb shadow */
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 8px;
		height: 60%;
		border-radius: 10px;
		background-color: var(--theme);
		filter: blur(13px);
	}
`;

const Track = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Dot = styled.div`
	position: relative;
	width: 2px;
	height: 2px;
	border-radius: 50%;
	background-color: var(--white);
`;

/* Export everything */
export { SliderWrapper, Slider, Thumb, Track, Dot };
