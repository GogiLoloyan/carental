import styled from 'styled-components';
import { motion } from 'framer-motion';

const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const Gradient = styled.div`
	width: 100%;
	height: 100%;
	background-image: radial-gradient(54vh at 7% 63%, #08041163, transparent 103%),
		radial-gradient(
			100vh at 4% -18%,
			#6149e180 6%,
			#6149e17a 12%,
			#6149e112 32vw,
			#15102700 46vw
		),
		radial-gradient(
			84vh at 100% 100%,
			#6149e170 -1%,
			#6149e15c 22%,
			#6149e147 39%,
			#6149e138 50%,
			#6149e114 86%,
			#1a102700 124%
		),
		linear-gradient(
			115deg,
			#000000,
			#09070efa 33vh,
			#0f0920eb 55vh,
			#0f0920c7 68vh,
			#0f09209e 76vh,
			transparent 114vh
		);
`;

const CarImage = styled(motion.img)`
	position: absolute;
	bottom: 0;
	z-index: -1;
	width: 65vw;
	min-width: 700px;
	/* filter: drop-shadow(127px 23px 5vw #6149e12b); */
`;

/* Export everything */
export { Background, Gradient, CarImage };
