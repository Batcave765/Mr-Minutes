import React from "react";
import "../Styles/Header.css";

const Header = () => {
	return (
		<header>
			<div>
				<h1>Mr. Minutes</h1>
			</div>
			<div className="links">
				<h3>Clock</h3>
				<h3>Timer</h3>
				<h3>Stopwatch</h3>
			</div>
		</header>
	);
};

export default Header;
