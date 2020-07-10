import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { motionCard, motionElements } from './motion';
import { Card, Icon, Bubbles } from './styles';

import { use3dMouseMoveEffect } from 'Hooks';


/**
 * Service card component
 * @param {Object} props - props
 * @returns {React.Node} - service card component
 */
const Service = ({ title, description, img }) => {
	const {
		ref: cardRef,
		handleMouseMove,
		handleMouseOut
	} = use3dMouseMoveEffect();

	return (
		<Card.Wrapper>
			<Card
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseOut}
				{...motionCard}
			>
				<Icon {...motionElements}>
					<Bubbles />
					{img && <img src={img} alt="icon" />}
				</Icon>
				<motion.h2 {...motionElements}>{title}</motion.h2>
				<motion.p {...motionElements}>{description}</motion.p>
			</Card>
		</Card.Wrapper>
	);
};

Service.propTypes = {
	header: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string
};

export default Service;
