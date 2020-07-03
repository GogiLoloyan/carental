import React from 'react';
import PropTypes from 'prop-types';

import SvgMaker from 'helper/SvgMaker';
import { NavLinkWrapper, StyledNavlink, Text } from './styles';

/**
 * RightNav component
 * @returns {React.Node} - right nav component
 */
const RightNav = ({ isContactPage }) => (
	<NavLinkWrapper>
		<StyledNavlink to={isContactPage ? '/' : 'contact-us'}>
			<Text iscontactpage={!!isContactPage}>
				<span>{isContactPage ? 'back home' : 'contact us'}</span>
				<SvgMaker icon="arrow-long" />
			</Text>
		</StyledNavlink>
	</NavLinkWrapper>
);

RightNav.propTypes = {
	isContactPage: PropTypes.bool.isRequired
};

export default RightNav;
