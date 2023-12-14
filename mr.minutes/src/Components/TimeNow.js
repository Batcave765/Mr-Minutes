import React from "react";
import Clock from "react-live-clock";
import Header from "./Header";
const TimeNow = () => {
	return (
		<>
			<Header />
			<div className="timenow">
				<h1 style={{ fontSize: "20vw" }}>
					<Clock format={"h:mm:ssa"} ticking={true} />
				</h1>
				<Clock format={"dddd, MMMM Mo, YYYY"} />
			</div>
		</>
	);
};

export default TimeNow;
