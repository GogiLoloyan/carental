import React from 'react';

import { OpacityMotion } from 'Motion/layouts';
import { Background } from './styles';
import { opacityMotion } from '../Services/motion';

const Home = () => (
	<Background {...opacityMotion}>
		<div className='bg bg-home'>
			{/* <img className="bg-home" src="" /> */}
			<div className='bg-home__gradient' />
		</div>
	</Background>
);

export default Home;
