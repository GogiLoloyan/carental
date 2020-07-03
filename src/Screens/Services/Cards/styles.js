import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardsList = styled(motion.ul)`
	/* position in parent grid layout */
	grid-row: 1 / 9;
	align-self: end;

	/* grid layout */
	display: grid;
	grid-gap: 12px;
	grid-template-rows: repeat(2, 135px);
	grid-template-columns: repeat(2, 260px);
`;

export { CardsList };
