import styled, { keyframes } from 'styled-components'

const LoaderBackground = styled.div`
	--ease: cubic-bezier(0.8, 0, 0.2, 1);
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;

	background-image: radial-gradient(
			35vh at 100% 100%,
			#9642f215,
			transparent 300%
		),
		radial-gradient(35vh at 0% 0%, #9642f21c, transparent 300%),
		radial-gradient(40vh at 70% 18%, #0c091052, transparent 150%),
		radial-gradient(64vh 45vh at -8% 100%, #9642f226, transparent 178%),
		radial-gradient(64vh 45vh at -8% 100%, #9642f222, transparent 138%),
		radial-gradient(64vh 45vh at -8% 100%, #9642f215, transparent 71%),
		radial-gradient(64vh 45vh at -8% 100%, #9642f210, transparent 52%),
		radial-gradient(45vh at 68% 2%, #9642f220, transparent 141%),
		radial-gradient(45vh at 68% 2%, #9642f215, transparent 111%),
		radial-gradient(45vh at 68% 2%, #9642f20f, transparent 87%),
		radial-gradient(45vh at 68% 2%, #9642f209, transparent 57%),
		radial-gradient(45vh at 68% 2%, #9642f20f, transparent 111%),
		radial-gradient(45vh at 95% 42%, #9642f207, transparent 87%),
		radial-gradient(45vh at 95% 42%, #9642f202, transparent 69%);
`

const LogoLetters = styled.div`
	display: grid;
	align-items: center;
	grid-column-gap: 0.4em;
	grid-auto-flow: column;

	font-size: 2em;
	font-weight: 300;
	color: var(--white);
	text-transform: uppercase;
	letter-spacing: 3px;
`

const StartLetters = styled.div``

const EndLetters = styled.div``

const DesignLetterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.5em;
	height: 1.5em;
`

const animBorder = keyframes`
	0% {
		transform: rotate(0deg);
		border-color: var(--blue);
	}
	50% {
		transform: rotate(-92deg);
		border-color: var(--red);
	}
	100% {
		transform: rotate(-180deg);
		border-color: var(--blue);
	}
`

const DesignLetterBorder = styled.div`
	position: absolute;
	width: 1.5em;
	height: 1.5em;
	border: 1px solid var(--blue);
	animation: ${animBorder} 5s var(--ease) infinite;
`

const animLetter = keyframes`
	0% {
		color: var(--blue);
	}
	50% {
		color: var(--red);
	}
	100% {
		color: var(--blue);
	}
`

const DesignLetter = styled.div`
	animation: ${animLetter} 5s var(--ease) infinite;
`

/* Export everything */
export {
	LoaderBackground,
	LogoLetters,
	StartLetters,
	DesignLetterWrapper,
	DesignLetterBorder,
	DesignLetter,
	EndLetters
}
