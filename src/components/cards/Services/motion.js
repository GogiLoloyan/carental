import { easeOutExpo } from 'motion/transitions';
/**
 * @typedef {import('../../../motion/variants').Variants} Variants - Different states for animating, almost like keyframes of motion elements
 */

/**
 * @type {Variants} variantsCard - motion variants for card
 */
const variantsCard = {
	initial: {
		top: 40,
		opacity: 0
	},
	animate: {
		top: 0,
		opacity: 1,
		transition: {
			...easeOutExpo,
			staggerChildren: 0.1
		}
	}
};

/**
 * @type {Variants} variantsElements - motion variants for card's elements
 */
const variantsElements = {
	initial: {
		y: 40,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: easeOutExpo
	}
};

const motionCard = {
	variants: variantsCard
};

const motionElements = {
	variants: variantsElements
};

export { motionCard, motionElements };
