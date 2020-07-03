import { stagger, variants } from 'Motion/variants/headerTexts';

const parentMotion = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants: stagger
};

const childrenMotion = {
	variants
};

export { parentMotion, childrenMotion };
