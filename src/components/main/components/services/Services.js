import React, { Fragment } from 'react'

import Header from './components/Header'
import ServicesCards from './components/ServicesCards'

import ServicesBackground from '../../../backgrounds/ServicesBackground'

import TranslateXMotion from '../../../../motion/layouts/TranslateXMotion'
import OpacityMotion from '../../../../motion/layouts/OpacityMotion'


function Services() {
	return (
		<Fragment>
			<OpacityMotion>
				<ServicesBackground />
			</OpacityMotion>
			<section className='services main-content'>
				<OpacityMotion className='services__header--motion-wrapper'>
					<Header />
				</OpacityMotion>

				<TranslateXMotion className='services__cards--motion-wrapper'>
					<ServicesCards />
				</TranslateXMotion>
			</section>
		</Fragment>
	)
}

export default Services
