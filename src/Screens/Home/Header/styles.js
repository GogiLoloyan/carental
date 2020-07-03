import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const translateY = keyframes`
	from {
		opacity: 0;
		top: -150%;
	}
	to {
		opacity: 1;
		top: -47%;
	}
`;

const HomeHeader = styled(motion.header)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-self: flex-end;
`;

const H1 = styled(motion.h1).attrs(() => ({
	'data-bg-text': 'CAR RENTAL'
}))`
	position: relative;
	font-size: 120px;
	font-weight: 400;
	color: var(--white);
	line-height: 80%;
	opacity: 0.99 !important;

	&::after {
		content: attr(data-bg-text);
		width: max-content;
		position: absolute;
		left: -14%;
		font-size: 1em;
		font-weight: 900;
		background-image: linear-gradient(to top, #2a2048, transparent);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		z-index: -1;
		opacity: 0;
		animation: ${translateY} 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
`;

const Help = styled(motion.p)`
	position: relative;
	align-self: center;
	left: -10%;
	color: var(--red);
	font-size: var(--h3);
	font-weight: 400;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin: 4vh 0 7vh 0;

	/* right line */
	&::before {
		content: '';
		position: absolute;
		bottom: 20%;
		left: 110%;
		height: 1px;
		width: 100%;
		background-color: var(--red);
	}

	/* text shadow */
	&::after {
		content: '';
		position: absolute;
		bottom: 25%;
		left: -8%;
		height: 50%;
		width: 120%;
		background-color: var(--red);
		filter: blur(54px);
	}
`;

const Wrapper = styled.div`
	position: relative;
	left: 6%;
`;

const H2 = styled(motion.h2)`
	font-size: var(--h3);
	color: var(--white);
	font-weight: 500;
	margin-bottom: 0.5em;
`;

const Description = styled(motion.p)`
	font-size: var(--p);
	font-weight: 500;
	line-height: 130%;
	color: var(--paragraf);
`;

export { HomeHeader, H1, H2, Help, Wrapper, Description };
