import styled from "styled-components";
// COMPONENTS
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import RightSide from "./components/RightSide";
// IMAGES
import MT from "./assets/mexicanTacos.jpg";
import FP from "./assets/farmHousePizza.jpg";
import CB from "./assets/chickenBurger.jpg";
import LN from "./assets/loadedNachos.jpg";
import HN from "./assets/hakkaNoodles.jpg";
// CONSTANTS
import { COLORS } from "./assets/colors";
import MainDiv from "./components/MainDiv";

const Wrapper = styled.div`
	max-width: 1300px;
	margin: 0 auto;

	.desktopView {
		display: flex;
		padding: 20px;
	}

	.mobileView {
		display: none;
	}

	@media (max-width: 768px) {
		.desktopView {
			display: none;
		}

		.mobileView {
			display: flex;
		}
	}
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		font-size: 34px;
		margin: 80px auto 0px auto;
		font-weight: 800;
		padding: 0px 25px;
	}

	p {
		font-size: 14px;
		color: ${COLORS.grayText};
		font-weight: 300;
		padding: 0px 20px;
		margin: 0px 10px 10px 10px;
		letter-spacing: 0.1rem;
		line-height: 1.5rem;
	}

	span {
		display: block;
		width: 150px;
		height: 2px;
		background-color: ${COLORS.hamburger};
		margin: 10px 0px 40px 30px;
		border-radius: 10px;
	}

	@media (max-width: 768px) {
		padding-top: 50px;
	}

	@media (max-width: 1300px) {
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: 10px auto;
`;

const products = [
	{
		image: MT,
		title: "Mexican Taco",
	},
	{
		image: FP,
		title: "Farmhouse Pizza",
	},
	{
		image: CB,
		title: "Chicken Burger",
	},
	{
		image: LN,
		title: "Loaded Nachos",
	},
	{
		image: HN,
		title: "Hakka Noodles",
	},
];

const Main = () => {
	return (
		<Wrapper>
			<div className="desktopView">
				<RightSide />
				<MainDiv products={products} />
			</div>
			<div className="mobileView">
				<Navbar />
				<MainContent>
					<h3>What are you having for Lunch?</h3>
					<CardWrapper>
						{products.map((product, index) => (
							<Card product={product} key={index} />
						))}
					</CardWrapper>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ratione
						numquam ea consequuntur beatae
					</p>
					<span></span>
				</MainContent>
			</div>
		</Wrapper>
	);
};

export default Main;
