/**
 * @type {import('../../../Motion/variants').Variants} stagger -  motion variants for stagger children
 */
const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	},
	exit: {
		opacity: 0
	}
};

export const motion = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants: stagger
};
