import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

let isScrolled = true

export const useWheelScroll = ({ currentPath, mainPaths }) => {
	const history = useHistory()

	useEffect(() => {
		window.addEventListener('wheel', wheelHandler)
		return () => window.removeEventListener('wheel', wheelHandler)
	})

	const wheelHandler = ({ wheelDelta }) => {
		if (!isScrolled) return
		isScrolled = false
		setTimeout(() => (isScrolled = true), 1400)

		const pageNum = currentPath.id

		wheelDelta < 0 ? WheelDown(pageNum) : WheelUp(pageNum)
	}

	const WheelUp = pageNum => {
		if (pageNum === mainPaths[0].id) return

		const { path } = mainPaths[pageNum - 2]
		history.push(`/${path}`)
	}

	const WheelDown = pageNum => {
		if (pageNum === mainPaths[mainPaths.length - 1].id) return

		const { path } = mainPaths[pageNum]
		history.push(`/${path}`)
	}
}
