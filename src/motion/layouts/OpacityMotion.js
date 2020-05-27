import React from 'react'
import { motion } from 'framer-motion'

import { easeOutExpo } from '../transitions'

export const variats = {
	initial: {
		opacity: 0,
		transitions: {
			...easeOutExpo
		}
	},
	enter: {
		opacity: 1,
		transitions: {
			...easeOutExpo
		}
	},
	exit: {
		opacity: 0,
		transitions: {
			...easeOutExpo
		}
	}
}

const OpacityMotion = ({ children, className = '' }) => (
	<motion.div
		initial='initial'
		animate='enter'
		exit='exit'
		variants={variats}
		className={className}
	>
		{children}
	</motion.div>
)

export default OpacityMotion
