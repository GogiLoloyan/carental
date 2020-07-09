import { useRef } from 'react';


export const use3dMouseMoveEffect = () => {
	const ref = useRef(null);

	const handleMouseMove = ({ screenX, screenY }) => {
		const target = ref.current;

		const { offsetWidth, offsetHeight } = target;
		const { left, top } = target.getBoundingClientRect();

		const x = screenX - left - offsetWidth / 2;
		const y = screenY - top - offsetHeight / 2;

		target.style.transform = `
			rotateX(${-y / 30}deg)
			rotateY(${x / 50}deg) 
      translate3d(${x / 40}px, ${y / 40}px, 0px)
		`;
	};

	const handleMouseOut = () => {
		ref.current.style.transform = '';
	};

	return { ref, handleMouseMove, handleMouseOut };
};
