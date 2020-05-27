import React from 'react'
import SearchFreeCar from './components/SearchFreeCar'
import Header from './components/Header'
import OpacityMotion from '../../../../motion/layouts/OpacityMotion'
import TranslateYMotion from '../../../../motion/layouts/TranslateYMotion'

function Home() {
	return (
		<section className='home main-content'>
			<OpacityMotion className='home__header--motion-wrapper'>
				<Header />
			</OpacityMotion>
			
			<TranslateYMotion>
				<SearchFreeCar />
			</TranslateYMotion>
		</section>
	)
}

export default Home
