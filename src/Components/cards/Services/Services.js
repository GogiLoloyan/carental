import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { motionCard, motionElements } from './motion';
import { Wrapper, Card, Icon, Bubbles } from './styles';

/**
 * Service card component
 * @param {Object} props - props
 * @returns {React.Node} - service card component
 */
const Service = ({ header, description, img }) => {
	const cardRef = useRef(null);

	const handleMouseMove = ({ pageX, pageY }) => {
		const card = cardRef.current;

		const { offsetWidth, offsetHeight } = card;
		const { left, top } = card.getBoundingClientRect();

		const x = pageX - left - offsetWidth / 2;
		const y = pageY - top - offsetHeight / 2;

		cardRef.current.style.transform = `
			rotateX(${-y / 15}deg)
			rotateY(${x / 30}deg) 
			translate3d(${x / 30}px, ${y / 15}px, 0px)
		`;
	};

	const handleMouseOut = () => {
		cardRef.current.style.transform = '';
	};

	return (
		<Wrapper>
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
				<motion.h2 {...motionElements}>{header}</motion.h2>
				<motion.p {...motionElements}>{description}</motion.p>
			</Card>
		</Wrapper>
	);
};

Service.propTypes = {
	header: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string
};

export default Service;
