import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import SvgMaker from '../../../helper/SvgMaker'

/**
 * RightNav component
 * @returns {React.Node} - right nav component
 */
const RightNav = ({ path }) => {
	const isContactPage = path === 'contact-us'
	return (
		<div className='right-nav'>
			<NavLink
				className='right-nav__link'
				tabIndex='0'
				data-order={isContactPage}
				to={{
					pathname: isContactPage ? '/' : '/contact-us',
					state: { team: 'red', page: isContactPage ? 1 : 7 }
				}}
			>
				<span className='link-content' tabIndex='0'>
					<SvgMaker icon='arrow-long' />
					<span className='link-content__text'>
						{isContactPage ? 'back home' : 'contact us'}
					</span>
				</span>
			</NavLink>
		</div>
	)
}

RightNav.propTypes = {
	path: PropTypes.string.isRequired
}

export default RightNav
