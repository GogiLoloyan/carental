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
	},
	exit: {
		opacity: 0
	}
};

export const motion = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	transitions: easeOutExpo,
	variants
};
