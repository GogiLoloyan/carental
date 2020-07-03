import React from 'react';
import { motion } from 'framer-motion';

import { easeOutExpo } from '../transitions';

const variants = {
	initial: {
		x: '-100%',
		opacity: 0
	},
	animate: {
		x: '-25%',
		opacity: 1,
		transition: easeOutExpo
	},
	exit: {
		opacity: 0,
		transition: easeOutExpo
	}
};

export const ServiceCarMotion = ({ children, className = '' }) => (
	<motion.div
		initial="initial"
		animate="animate"
		exit="exit"
		variants={variants}
		className={className}
	>
		{children}
	</motion.div>
);
