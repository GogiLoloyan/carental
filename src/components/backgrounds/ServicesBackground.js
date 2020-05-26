import React from 'react'
import { motion } from 'framer-motion'

import { serviceCar } from '../../motion/concret/serviceCar'

import img from '../../services_car.png'

const ServicesBackground = () => {
	return (
		<div className='bg bg-services'>
			<motion.img
				variants={serviceCar}
				initial='initial'
				animate='enter'
				exit='exit'
				className='bg-services__car'
				alt='mazda'
				src={img}
			/>
			<div className='bg-services__gradient'></div>
		</div>
	)
}

export default ServicesBackground
