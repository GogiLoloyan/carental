import { easeOutExpo } from '../transitions';

/**
 * @type {import('.').Variants} Variants - motion variants for opacity
 */

/**
 * @type {Variants} variants - motion variants for all elements
 */
export const variants = {
	initial: {
		y: 80,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: easeOutExpo
	}
};

/**
 * @type {Variants} stagger - motion variants for stagger children
 */
export const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	},
	exit: {
		opacity: 0,
	}
};
