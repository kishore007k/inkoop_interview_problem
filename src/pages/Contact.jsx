import Navbar from "../components/Navbar";

import styled from "styled-components";

const Wrapper = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	div {
		text-align: center;
		margin-top: 80px;
	}

	nav {
		margin-top: 100px;
	}
`;

const Contact = () => {
	return (
		<Wrapper>
			<Navbar />
			<div>
				<h1>Contact Component</h1>
			</div>
		</Wrapper>
	);
};

export default Contact;
