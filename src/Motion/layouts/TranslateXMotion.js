import React from 'react';
import { motion } from 'framer-motion';

import { easeOutExpo } from '../transitions';

const variants = {
	initial: {
		x: '10vw',
		opacity: -0.2,
		transition: easeOutExpo
	},
	enter: {
		x: 0,
		opacity: 1,
		transition: easeOutExpo
	}
};

export const TranslateXMotion = ({ children, className = '' }) => (
	<motion.div
		initial="initial"
		animate="enter"
		exit="initial"
		variants={variants}
		className={className}
	>
		{children}
	</motion.div>
);
