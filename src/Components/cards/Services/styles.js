import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.li`
	list-style: none;
	z-index: 4000;
	transform: scale(1);
	transition: transform 150ms ease-in-out;
	display: grid;

	/* 3d effect */
	perspective: 1200px;
	transform-style: preserve-3d;


	&:nth-child(1) {
		transform-origin: 60% 140%;
	}
	&:nth-child(2) {
		transform-origin: 40% 140%;
	}
	&:nth-child(3) {
		transform-origin: 60% -40%;
	}
	&:nth-child(4) {
		transform-origin: 40% -40%;
	}

	&:hover {
		transform: scale(1.2);
		transition: transform 300ms ease-out;
		z-index: 5000;
	}
`;

const Card = styled(motion.div)`
	display: grid;
	grid-column-gap: 1.5em;
	grid-template-columns: min-content 1fr;
	padding: 27px 27px 20px 27px;

	background-color: var(--card-fon);
	background-image: radial-gradient(34vw at 144% 70%, #191921, var(--card-fon));

	transition: transform 250ms ease-out;

	position: relative;
	user-select: none;
	cursor: pointer;


	h2 {
		position: relative;
		color: var(--white);
		font-size: var(--p);
		letter-spacing: 0.5px;
		font-weight: 500;

		/* line under the text */
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 2em;
			width: 1.5em;
			height: 2px;
			background-color: var(--purple);
			box-shadow: 0 0 11px 0px #9642f2;
		}
	}

	p {
		grid-column: 1/3;
		align-self: end;
		font-size: calc(var(--p) - 4px);
		color: var(--white);
		font-weight: 500;
	}

	&:hover {
		background-color: var(--blue);
		background-image: radial-gradient(
			100px at 100% 60%,
			#311ca1,
			transparent 267%
		);
		box-shadow: 0px 0px 80px 0px #6f56ac7d;

		h2::after {
			background-color: var(--white);
			box-shadow: 0 0 11px 0px var(--white);
		}
	}
`;

const Icon = styled(motion.div)`
	position: relative;
	width: 3.125em;
	height: 3.125em;
	border-radius: 50%;
	background-color: var(--card-fon);
	background-image: linear-gradient(-180deg, #181923, transparent 100%);
	box-shadow: -3px -2px 2px 1px #110c14d6, 0px 0px 1px 3px #6e3994,
		1px 0px 3px 4px #110c1499, inset -1px 0px 2px 2px #110c145e;

	${Card}:hover & {
		background-color: var(--blue);
		background-image: linear-gradient(-180deg, #311ca1, transparent 120%);
		box-shadow: -2px -1px 2px 0px #1e06cdd6, 0px 0px 1px 2px #b2a3c0,
			1px 0px 3px 2px #0b008dd4, inset -1px 0px 2px 2px #00026f0a;
	}
`;

const Bubbles = styled.div`
	position: absolute;
	top: -21%;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(
			0.7em at 7% 36%,
			var(--white) 15%,
			transparent 26%
		),
		radial-gradient(0.2em at 35% 38%, #8f78a8 15%, transparent 61%),
		radial-gradient(0.2em at 12% 62%, #68368a 15%, transparent 52%),
		radial-gradient(0.1em at 23% 10%, #68368b 15%, transparent 81%),
		radial-gradient(0.35em at 45% 4%, #8b40c1 15%, transparent 37%);

	${Card}:hover & {
		background-image: radial-gradient(
				0.7em at 7% 36%,
				#d3c6de 15%,
				transparent 26%
			),
			radial-gradient(0.2em at 35% 38%, var(--white) 15%, transparent 61%),
			radial-gradient(0.2em at 12% 62%, var(--white) 15%, transparent 52%),
			radial-gradient(0.1em at 23% 10%, var(--white) 15%, transparent 81%),
			radial-gradient(0.35em at 45% 4%, var(--white) 15%, transparent 37%);
	}
`;

export { Wrapper, Card, Icon, Bubbles };
