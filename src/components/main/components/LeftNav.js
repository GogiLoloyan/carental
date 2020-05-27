import React from 'react'

const LeftNav = ({ currentPageNumber }) => (
	<nav className='left-nav' role='navigation'>
		<div className='left-nav__content'>
			<div
				className='left-nav__front'
				style={{ '--top': currentPageNumber - 1 }}
			>
				<div className='left-nav__line-container'>
					<div className='left-nav__line'></div>
					<div className='left-nav__line--shadow'></div>
				</div>
				<span className='left-nav__number'>{`0${currentPageNumber}`}</span>
			</div>

			<div className='left-nav__back'>
				{[...Array(12)].map((_, i) => (
					<span key={i} />
				))}
			</div>
		</div>
	</nav>
)

export default LeftNav
