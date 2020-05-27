import React from 'react'

import Header from './components/Header'
import ServicesCards from './components/ServicesCards'
import TranslateXMotion from '../../../../motion/layouts/TranslateXMotion'
import OpacityMotion from '../../../../motion/layouts/OpacityMotion'

function Services() {
	return (
		<section className='services main-content'>
			<OpacityMotion className='services__header--motion-wrapper'>
				<Header />
			</OpacityMotion>

			<TranslateXMotion className='services__cards--motion-wrapper'>
				<ServicesCards />
			</TranslateXMotion>
		</section>
	)
}

export default Services
