import { Link } from "react-router-dom";
import React from "react";
import "../Styles/Header.css";

const Header = () => {
	return (
		<header>
			<div>
				<h1>Mr. Minutes</h1>
			</div>
			<div className="links">
				<button>
					<Link to="/">
						<h3>Clock</h3>
					</Link>
				</button>
				<button>
					<Link to="/timer">
						<h3>Timer</h3>
					</Link>
				</button>
				<button>
					<Link to="/stopwatch">
						<h3>Stopwatch</h3>
					</Link>
				</button>
			</div>
		</header>
	);
};

export default Header;
