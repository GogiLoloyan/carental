import React, { useState, useEffect } from 'react';

import { Wrapper, Title, Description } from './styles';
import { parentMotion, childrenMotion } from './motion';
import SignUpPage from 'Components/SignUp';

/**
 * Services header component
 * @returns {React.Node} - services header component
 */
const Header = ({ db }) => {
	const [data, setData] = useState({ title: '', description: '' });

	useEffect(
		() =>
			db.ref(`services/header`).on('value', snapshot => {
				const { title, description } = snapshot.val();
				setData({ title, description });
			}),
		[]
	);

	return (
		<Wrapper {...parentMotion}>
			{/* <SignUpPage /> */}
			<Title {...childrenMotion}>{data.title}</Title>
			<Description {...childrenMotion}>{data.description}</Description>
		</Wrapper>
	);
};

export default Header;
