import styled from "styled-components";
import ProcessImg from "../../assets/process.svg";

export const ProcessContainer = styled.section`
	grid-column: full-start / full-end;
	padding: 5rem 2rem;
	background-color: rgb(var(--grey-light));

	& > h1 {
		font-weight: 700;
		opacity: 1;
		text-align: center;
	}

	@media screen and (max-width: 1440px) {
		padding: 3rem;
	}

	@media screen and (max-width: 960px) {
		padding: 1rem;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const ContentBox = styled.div`
	display: grid;
	grid-template-columns: 60% auto;
	grid-gap: 2rem;
	color: rgb(var(--black));

	@media screen and (max-width: 960px) {
		padding: 0;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
`;

export const ImageContainer = styled.div`
	background-image: url(${ProcessImg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

export const StepContainer = styled.div`
	padding: 3rem;
	margin-top: 2rem;

	& li {
		font-size: clamp(1.2rem, 2vw, 1.4rem);
		font-weight: 700;
	}
`;

export const Step = styled.div`
	margin-bottom: 3rem;
`;

export const StepTitle = styled.h3`
	font-size: clamp(2rem, 2vw, 2.6rem);
	font-weight: 700;
	margin-bottom: 1rem;
`;

export const StepText = styled.p`
	font-size: clamp(1.4rem, 2vw, 1.6rem);
	margin-bottom: 1rem;

	color: rgb(var(--grey-dark));
`;
