import React from 'react'
import { useSelector } from 'react-redux'

import LeftNav from './components/LeftNav'
import RightNav from './components/RightNav'
import Background from './components/Background'
import Content from './components/Content'

const Main = () => {
	const currentPageNumber = useSelector(({ routes }) => routes.current_path.id)
	const isContactPage = currentPageNumber === 7

	return (
		<section className='main-page'>
			<LeftNav currentPageNumber={currentPageNumber} />

			<Background />
			<Content />

			<RightNav isContactPage={isContactPage} />
		</section>
	)
}

export default Main