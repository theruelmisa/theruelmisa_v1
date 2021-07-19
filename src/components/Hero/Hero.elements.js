import styled from "styled-components";
import {
	MainHeading,
	SubHeading,
	zoomInFromCenter,
	enterFromBelow,
	changeOpacity,
} from "../../globalStyles";
import bgImg from '../../assets/main-logo-md.svg';

export const HeroContainer = styled.section`
	grid-column: full-start / full-end;
	align-self: center;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	/* grid-template-columns:
		[full-start] minmax(3rem, 1fr) [center-start] repeat(
			8,
			[col-start] minmax(min-content, 18rem) [col-end]
		)
		[center-end] minmax(3rem, 1fr) [full-end]; */
	/* align-items: center;
	justify-items: start; */

	background: inherit;
	background-image: url(${bgImg}); 
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	background-attachment: fixed;


`;

export const IntroBox = styled.div`
	grid-column: center-start / center-end;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const IntroTitle = styled(MainHeading)`
	font-size: clamp(3.5rem, 4vw, 5.5rem);
	letter-spacing: 0.7rem;
	font-weight: 700;
	opacity: 0;
	animation: ${zoomInFromCenter} 3s ease-in-out 1 forwards;
`;

export const IntroSubtitle = styled(SubHeading)`
	font-size: clamp(1.4rem, 4vw, 2.6rem);
	letter-spacing: 0.1rem;
	opacity: 0;
	animation: ${enterFromBelow} 1.5s ease-in-out 2.5s 1 forwards;
`;

export const IntroPara = styled.p`
	padding: 1rem 0.5rem;
	margin-bottom: 3rem;
	font-size: clamp(1rem, 2vw, 1.4rem);
	letter-spacing: 0.1rem;
	line-height: 2rem;
	opacity: 0;
	animation: ${enterFromBelow} 1.5s ease-in-out 3s 1 forwards;
`;

export const IntroButton = styled.button`
	cursor: pointer;
	font-size: 1.6rem;
	padding: 1rem 2.5rem;
	margin-bottom: 3rem;
	border: 2px solid rgb(var(--grey-light));
	border-radius: 0.7rem;
	background-color: inherit;
	color: rgb(var(--grey-light));
	box-shadow: 3px 3px 50px rgba(var(--grey-light), .2);
	opacity: 0;
	animation: ${enterFromBelow} 1.5s ease-in-out 3.5s 1 forwards;
	// Just testing
	/* background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */

	transition: all 0.3s ease;

	&:hover {
		background-color: rgb(var(--red-main));
		color: rgb(var(--grey-light));
		border-color: rgb(var(--red-main));
		box-shadow: var(--bs-medium);
	}

	&:active {
		outline: none;
	}
`;

export const ScrollerBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 5%;
	opacity: 0;
	animation: ${changeOpacity} 1.5s ease-in-out 4.5s 1 forwards;
	& > * {
		animation: pulse 1.2s infinite;

		@keyframes pulse {
			0% {
				opacity: 0;
			}

			50% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}
	}

	& > *:nth-child(1) {
		animation-delay: 0.3s;
	}

	& > *:nth-child(2) {
		animation-delay: 0.6s;
	}
	& > *:nth-child(3) {
		animation-delay: 0.9s;
	}
`;

export const Scroller = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	background-color: rgb(var(--grey-light));
	margin: 1rem 0;
	clip-path: polygon(50% 70%, 0 0, 100% 0);
`;
