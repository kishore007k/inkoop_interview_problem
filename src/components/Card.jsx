import styled from "styled-components";
import { COLORS } from "../assets/colors";

const CardContainer = styled.div`
	display: flex;
	width: 150px;
	height: 180px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px;
	border-radius: 20px;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
	margin: 10px 20px;

	h4 {
		font-size: 12px;
		color: ${COLORS.text};
		font-weight: 900;
		text-align: center;
	}
`;

const CardImage = styled.div`
	width: 100px;
	height: 100px;
	background: url(${({ photo }) => (photo ? photo : "")});
	background-size: cover;
	background-position: center;
	border-radius: 50%;
`;

const Card = ({ product }) => {
	const { image, title } = product;

	return (
		<CardContainer>
			<CardImage photo={image} />
			<h4>{title}</h4>
		</CardContainer>
	);
};

export default Card;
