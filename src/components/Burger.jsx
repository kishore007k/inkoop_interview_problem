import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../assets/colors";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 8px;
	left: 15px;
	z-index: 20;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		height: 0.25rem;
		background-color: ${COLORS.hamburger};
		border-radius: 10px;
		transform-origin: 1px;
		transition: 0.5s ease-in-out all;

		:nth-child(1) {
			width: ${({ open }) => (open ? "2rem" : "1rem")};
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			width: 2rem;
			transform: ${({ open }) => (open ? "translate(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		:nth-child(3) {
			width: ${({ open }) => (open ? "2rem" : "1.7rem")};
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open} />
		</>
	);
};

export default Burger;
