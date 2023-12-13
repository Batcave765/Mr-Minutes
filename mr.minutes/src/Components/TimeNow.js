import React from "react";
import Clock from "react-live-clock";
const TimeNow = () => {
	return (
		<div className="timenow">
			<Clock format={"h:mm:ssa"} ticking={true} />
			<Clock format={"dddd, MMMM Mo, YYYY"} />
		</div>
	);
};

export default TimeNow;
