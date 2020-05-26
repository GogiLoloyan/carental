import { easeOutExpo } from '../transitions'

export const serviceCar = {
	initial: {
		opacity: 0,
		x: '-100%'
	},
	enter: {
		opacity: 1,
		x: '-25%',
		transition: {
			...easeOutExpo
		}
	},
	exit: {
		opacity: 0,
		x: '50%',
		transition: {
			...easeOutExpo,
			ease: 'easeOut'
		}
	}
}
