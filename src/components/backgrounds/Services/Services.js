import React from 'react';

import { Background, Gradient, CarImage } from './styles';
import { carMotion, opacityMotion } from './motion';
import car from '../../../services_car.png';

const Services = ({ image }) => (
	<Background {...opacityMotion}>
		{image && <CarImage {...carMotion} src={car} alt="mazda" />}
		<Gradient />
	</Background>
);

Services.defaultProps = {
	image: true
};

export default Services;
