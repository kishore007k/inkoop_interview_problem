import React from "react";
import { COLORS } from "./colors";

const CartIcon = () => {
	return (
		<svg viewBox="0 0 31 31" fill="none">
			<path
				stroke={COLORS.hamburger}
				strokeWidth="2"
				d="M.043 3.955h5.583l2.481 16.127h14.887l5.583-11.165H6.247"
			></path>
			<circle cx="10.422" cy="26.819" r="2.5" fill={COLORS.hamburger}></circle>
			<circle cx="20.666" cy="26.819" r="2.5" fill={COLORS.hamburger}></circle>
		</svg>
	);
};

export default CartIcon;
