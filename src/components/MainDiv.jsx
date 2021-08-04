import styled from "styled-components";
import { COLORS } from "../assets/colors";
import Card from "./Card";

const MainDivWrapper = styled.div`
	width: 75%;
	margin-left: auto;
	margin-top: 150px;
	align-self: center;

	.topDiv {
		display: grid;
		grid-template-columns: 2.5fr 1fr;

		.title {
			font-size: 42px;
			font-weight: 900;
			color: ${COLORS.title};
			margin-top: -20px;
		}

		.para {
			font-size: 16px;
			font-weight: 300;
			color: ${COLORS.grayText};
		}

		span {
			display: block;
			width: 80px;
			height: 2px;
			margin: 20px 0px;
			border-radius: 10px;
			background-color: ${COLORS.hamburger};
		}
	}
`;

const CardDivContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 40px;
`;

const MainDiv = ({ products }) => {
	return (
		<MainDivWrapper>
			<div className="topDiv">
				<div>
					<h2 className="title">What are you having for Lunch?</h2>
				</div>
				<div>
					<p className="para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						voluptatum neque
					</p>
					<span></span>
				</div>
			</div>
			<CardDivContainer>
				{products.map((product, index) => (
					<Card product={product} key={index} />
				))}
			</CardDivContainer>
		</MainDivWrapper>
	);
};

export default MainDiv;
