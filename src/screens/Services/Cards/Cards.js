import React from 'react';

import { CardsList } from './styles';
import { ServiceCard as Card } from 'components/cards';

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
 * @type {import('../../../motion/variants').Variants} stagger -  motion variants for stagger children
 */
const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	},
	exit: {
		opacity: 0
	}
};

/**
 * Services cards component
 * @returns {React.Node} - services cards component
 */
const Cards = () => (
	<CardsList
		initial="initial"
		animate="animate"
		exit="exit"
		variants={stagger}
		aria-label="our services"
	>
		{servicesData.map((data, i) => (
			<Card {...data} key={i} />
		))}
	</CardsList>
);

export default Cards;
