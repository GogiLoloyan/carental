import { useEffect, useRef } from 'react';

export const useDidUpdate = (effect, dependencies = []) => {
	const hasMount = useRef(false);

	useEffect(() => {
		if (hasMount.current) {
			effect();
		} else {
			hasMount.current = true;
		}
	}, dependencies);
};
