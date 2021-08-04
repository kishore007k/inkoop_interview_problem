import styled from "styled-components";
import { COLORS } from "../assets/colors";
import RightNav from "./RightNav";

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: fixed;
	width: 20%;
	top: 0;
	bottom: 0;
	padding-left: 20px;

	h1 {
		font-size: 32px;
		font-weight: 900;
		color: ${COLORS.title};
		text-transform: capitalize;
	}

	button {
		max-width: 80%;
		padding: 10px 50px;
		border-radius: 50px;
		font-size: 18px;
		font-weight: 300;
		background-color: ${COLORS.hamburger};
		color: #fff;
		text-align: center;
		cursor: pointer;
		transition: 0.3s ease-in-out all;

		:hover {
			background-color: #fcfcfc;
			color: ${COLORS.hamburger};
			font-weight: 600;
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
		}
	}

	@media (max-width: 1100px) {
		button {
			padding: 10px 20px;
		}
	}

	@media (max-width: 1920px) {
		padding-left: 0px;

		button {
			width: 50%;
		}
	}
`;

const RightSide = () => {
	return (
		<RightWrapper>
			<h1>lorem ipsum</h1>
			<RightNav />
			<button>Cart</button>
		</RightWrapper>
	);
};

export default RightSide;
