import React from 'react'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../transitions'

export const variants = {
	initial: {
		opacity: 0,
		x: '-100%',
		transition: {
			...easeOutExpo
		}
	},
	enter: {
		opacity: 1,
		x: '-25%',
		transition: {
			...easeOutExpo,
			delay: 0.5
		}
	},
	exit: {
		opacity: 0,
		x: '-100%',
		transition: {
			...easeOutExpo,
			ease: 'easeOut'
		}
	}
}

const ServiceCarMotion = ({ children, className = '' }) => (
	<motion.div
		initial='initial'
		animate='enter'
		exit='exit'
		variants={variants}
		className={className}
	>
		{children}
	</motion.div>
)

export default ServiceCarMotion
