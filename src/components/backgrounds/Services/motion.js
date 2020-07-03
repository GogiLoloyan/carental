import { opacityMotion } from 'motion/concret';
import { easeOutExpo } from 'motion/transitions';

/**
 * @type {import('../../../motion/variants').Variants} variants - Different states for animating, almost like keyframes of motion elements
 */
const variants = {
	initial: {
		x: '-100%',
		opacity: 0
	},
	animate: {
		x: '-15%',
		opacity: 1,
		transition: easeOutExpo
	},
	exit: {
		opacity: 0
	}
};

const carMotion = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants
};

export { carMotion, opacityMotion };
