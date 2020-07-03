import React from 'react';

import { ServiceCard as Card } from 'Components/cards';

import { CardsList } from './styles';
import { motion } from './motion';

const servicesData = [
	{
		header: 'Rent a car',
		description: 'Rent yout favorite car'
	},
	{
		header: 'Auto parts',
		description: 'Track your pickups & delivery in real time'
	},
	{
		header: 'Fuel Plans',
		description: 'See the nearest gas stations on yor way'
	},
	{
		header: 'Car navigation',
		description: 'Select only shortest and best route'
	}
];

/**
 * Services cards component
 * @returns {React.Node} - services cards component
 */
const Cards = () => (
	<CardsList {...motion} aria-label="our services">
		{servicesData.map((data, i) => (
			<Card {...data} key={i} />
		))}
	</CardsList>
);

export default Cards;
