import React from 'react';
import { motion } from 'framer-motion';

import { easeOutExpo } from '../transitions';

const variants = {
	initial: {
		y: '8vh',
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: { ...easeOutExpo, delay: 0.4 }
	},
	exit: {
		opacity: 0
	}
};

export const TranslateYMotion = ({ children, className = '' }) => (
	<motion.div
		initial="initial"
		animate="enter"
		exit="exit"
		variants={variants}
		className={className}
	>
		{children}
	</motion.div>
);
