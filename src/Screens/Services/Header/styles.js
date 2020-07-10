import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const translateY = keyframes`
	from {
		opacity: 0;
		top: 110%;
	}
	to {
		opacity: 1;
		top: 30%;
	}
`;

const Wrapper = styled(motion.header)`
	grid-row: 1 / 7;
	align-self: end;
	justify-self: center;
	position: relative;
	padding-bottom: 4vh;
	white-space: nowrap;
	user-select: none;
`;

const Title = styled(motion.h1).attrs(() => ({
	'data-bg-text': 'OUR SERVICES',
	'aria-label': 'car rental services description'
}))`
	position: relative;
	z-index: 2000;
	font-size: var(--h1);
	color: var(--white);
	font-weight: 400;
	margin-bottom: 15vh;

	&::after {
		content: attr(data-bg-text);
		width: max-content;
		position: absolute;
		left: -10%;
		font-size: 80px;
		font-weight: 900;
		background: radial-gradient(
			414px at 45% 858%,
			#764ae24d 159%,
			transparent 200%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		z-index: -1;
		opacity: 0;
		animation: ${translateY} 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
`;

const Description = styled(motion.p)`
	position: relative;
	font-size: var(--p);
	color: var(--paragraf);
	font-weight: 500;

	&::before {
		content: '';
		position: absolute;
		top: -40%;
		height: 2px;
		width: 20%;
		background-color: #45306e5e;
	}
`;

/* Export everything */
export { Wrapper, Title, Description };
