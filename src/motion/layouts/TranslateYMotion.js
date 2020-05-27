import React from 'react'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../transitions'

export const variants = {
	initial: {
		opacity: -0.2,
		y: '10vh',
		transition: {
			...easeOutExpo
		}
	},
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			...easeOutExpo,
			delay: 0.5
		}
	},
	exit: {
		opacity: -0.2,
		y: '10vh',
		transition: {
			...easeOutExpo
		}
	}
}

const TranslateYMotion = ({ children, className = '' }) => (
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

export default TranslateYMotion
