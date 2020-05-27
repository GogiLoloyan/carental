import React from 'react'

import ServiceCarMotion from '../../motion/layouts/ServiceCarMotion'
import car from '../../services_car.png'

const ServicesBackground = () => {
	return (
		<div className='bg bg-services'>
			<ServiceCarMotion className='bg-services__car--wrapper'>
				<img alt='mazda' src={car} className='bg-services__car' />
			</ServiceCarMotion>

			<div className='bg-services__gradient'></div>
		</div>
	)
}

export default ServicesBackground
