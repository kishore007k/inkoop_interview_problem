import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../assets/CartIcon";
import { COLORS } from "../assets/colors";
import Burger from "./Burger";

const Nav = styled.nav`
	width: 100%;
	height: 50px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	position: relative;
	z-index: 2;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.01);

	.logo {
		margin: auto;

		a {
			font-size: 24px;
			font-weight: 900;
			text-transform: capitalize;
			text-decoration: none;
			color: ${COLORS.title};
		}
	}

	svg {
		width: 30px;
	}

	@media (max-width: 768px) {
		position: fixed;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Burger />
			<div className="logo">
				<Link to="/">lorem</Link>
			</div>
			<CartIcon />
		</Nav>
	);
};

export default Navbar;
