import React, { Fragment } from 'react'

import Header from './components/Header'
import SearchFreeCar from './components/SearchFreeCar'

import HomeBackground from '../../../backgrounds/HomeBackground'

import OpacityMotion from '../../../../motion/layouts/OpacityMotion'
import TranslateYMotion from '../../../../motion/layouts/TranslateYMotion'

function Home() {
	return (
		<Fragment>
			<OpacityMotion>
				<HomeBackground />
			</OpacityMotion>

				<section className='home main-content'>
					<OpacityMotion className='home__header--motion-wrapper'>
						<Header />
					</OpacityMotion>

					<TranslateYMotion>
						<SearchFreeCar />
					</TranslateYMotion>
				</section>
		</Fragment>
	)
}

export default Home
