import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../assets/colors";

const Ul = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	font-size: 20px;
	color: ${COLORS.grayText};

	@media (max-width: 1920px) {
		flex-direction: column;
		align-items: baseline;
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		align-items: center;
		background-color: #fcfcfc;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
		transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
		transition: 0.3s ease-in-out all;
	}
`;

const Li = styled.li`
	padding: 18px 10px;

	a {
		color: ${COLORS.text};
		text-decoration: ${({ active }) => (active ? "line-through" : "none")};
		text-decoration-color: ${({ active }) =>
			active ? COLORS.hamburger : COLORS.text};
		padding: 5px 10px;
		border-radius: 50px;
		transition: 0.2s ease-in all;

		:hover {
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
			background-color: ${COLORS.hamburger};
			color: #fff;
			text-decoration: none;
		}
	}

	@media (max-width: 768px) {
		color: ${COLORS.text};
	}

	@media (max-width: 1920px) {
		padding: 22px 10px;

		a {
			font-size: 18px;
			color: #707070;
		}
	}
`;

const RightNav = ({ open }) => {
	const [page, setPage] = useState("");

	useEffect(() => {
		const currentPath = window.location.pathname;
		const path = currentPath.slice(1);
		setPage(path);
	}, []);

	return (
		<Ul open={open}>
			<Li className="list" active={page === "" ? true : false}>
				<Link to="/">About</Link>
			</Li>
			<Li className="list" active={page === "services" ? true : false}>
				<Link to="/services">Services</Link>
			</Li>
			<Li className="list" active={page === "cuisine" ? true : false}>
				<Link to="/cuisine">Cuisine</Link>
			</Li>
			<Li className="list" active={page === "gallery" ? true : false}>
				<Link to="/gallery">Gallery</Link>
			</Li>
			<Li className="list" active={page === "contact" ? true : false}>
				<Link to="/contact">Contact</Link>
			</Li>
			<Li className="list" active={page === "book" ? true : false}>
				<Link to="/book">Book</Link>
			</Li>
		</Ul>
	);
};

export default RightNav;
