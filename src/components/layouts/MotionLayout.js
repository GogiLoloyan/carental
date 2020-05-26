import React from 'react'
import { motion } from 'framer-motion'

function MotionLayout({ children: Page, key }) {
	const transition = {
    type: 'tween',
    // -- easeOutExpo -- //
		ease: [0.16, 1, 0.3, 1],
		duration: 0.7
	}

	const variants = {
		initial: {
      opacity: -1,
      scale: 1.3,
			x: '15vw'
		},
		enter: {
      opacity: 1,
      scale: 1,
			x: 0,
			transition: {
				...transition,
				delay: 0.1
			}
		},
		exit: {
			opacity: -0.2,
      scale: 0.7,
      x: '-15vw',
			transition: {
				...transition
			}
		}
	}
	return (
		<motion.div
			initial='initial'
			animate='enter'
			exit='exit'
			variants={variants}
			key={key}
			className='main__content'
		>
			<Page />
		</motion.div>
	)
}

export default MotionLayout
