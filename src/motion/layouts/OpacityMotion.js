import React from 'react';
import { motion } from 'framer-motion';

import { easeOutExpo } from '../transitions';

/**
 * @type {import('../variants').Variants} variants - Different states for animating, almost like keyframes of motion elements
 */
const variants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transitions: easeOutExpo
	}
};

export const OpacityMotion = ({ children, className = '' }) => (
	<motion.div
		initial="initial"
		animate="animate"
		exit="initial"
		variants={variants}
		className={className}
	>
		{children}
	</motion.div>
);
