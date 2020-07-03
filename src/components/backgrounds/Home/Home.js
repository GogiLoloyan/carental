import React from 'react';

import { OpacityMotion } from 'motion/layouts';


const Home = () => (
	<OpacityMotion>
		<div className="bg bg-home">
			{/* <img className="bg-home" src="" /> */}
			<div className="bg-home__gradient" />
		</div>
	</OpacityMotion>
);

export default Home;
