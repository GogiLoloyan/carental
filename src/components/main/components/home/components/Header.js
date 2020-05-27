import React from 'react'

function Header() {
	return (
		<header
			className='home__header'
			aria-label='car rental main page description'
		>
			<h1 data-text='CAR RENTAL'>Car Rental</h1>
			<p className='help'>helps you</p>
			<div className='description'>
				<h2>Here you can rent a car of any brand</h2>
				<p>
					The Car Rental revolution: no more paperwork or endless waiting lines,
					<br />
					premium cars guaranteed and your virtual key diractly in your
					smartphone!
				</p>
			</div>
		</header>
	)
}

export default Header
