import { useEffect } from 'react';

/**
 * Hook that close element when click outside
 */
const useOutsideClickClose = (ref, setOpen) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, setOpen]);
};

export default useOutsideClickClose;
