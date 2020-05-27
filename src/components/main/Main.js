import React from 'react'
import { useSelector } from 'react-redux'

import LeftNav from './components/LeftNav'
import RightNav from './components/RightNav'
import Background from './components/Background'
import Content from './components/Content'
import useWheelScroll from '../../hooks/wheelScroll.hook'

const Main = () => {
	const { routes } = useSelector(store => store)
	const { id, path } = routes.currentPath
	useWheelScroll(routes)

	return (
		<section className='main-page'>
			<LeftNav currentPageNumber={id} />

			<Background />
			<Content />

			<RightNav isContactPage={path === 'contact-us'} />
		</section>
	)
}

export default Main
