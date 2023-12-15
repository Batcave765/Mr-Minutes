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
				<Link to="/">
					<button>
						<h3>Clock</h3>
					</button>
				</Link>

				<Link to="/timer">
					<button>
						<h3>Timer</h3>
					</button>
				</Link>

				<Link to="/stopwatch">
					<button>
						<h3>Stopwatch</h3>
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
