import { useState } from 'react'

export const useLooder = () => {
	const [loading, setLoading] = useState(true)

	window.addEventListener('load', () =>
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	)

	return loading
}
