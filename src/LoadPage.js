import React from 'react'

const Loader = () => {
	return (
		<div className='loader'>
			{/* [ca]rental */}
			<span className='loader__start'>ca</span>
			{/* ca[r]ental */}
			<div className='loader__design-letter--wrapper'>
				<div className='loader__design-letter--border'></div>
				<span className='loader__design-letter'>r</span>
			</div>
			{/* car[ental] */}
			<span className='loader__end'>ental</span>
		</div>
	)
}

export default Loader
