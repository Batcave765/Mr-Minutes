import React, { useState, useEffect } from "react";

const Stopwatch = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);

	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				setElapsedTime((prevElapsedTime) => prevElapsedTime + 10); // Update every 10 milliseconds
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isRunning]);

	const startStopwatch = () => {
		setIsRunning(true);
	};

	const stopStopwatch = () => {
		setIsRunning(false);
	};

	const resetStopwatch = () => {
		setIsRunning(false);
		setElapsedTime(0);
	};

	const formatTime = (time) => {
		const milliseconds = time % 1000;
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor(time / (60 * 1000));

		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
			2,
			"0"
		)}.${String(milliseconds).padStart(3, "0")}`;
	};

	return (
		<div className="content">
			<div className="inner">
				<h1>Stopwatch</h1>
				<div>
					<p>{formatTime(elapsedTime)}</p>
					<button onClick={startStopwatch} disabled={isRunning}>
						Start
					</button>
					<button onClick={stopStopwatch} disabled={!isRunning}>
						Stop
					</button>
					<button onClick={resetStopwatch}>Reset</button>
				</div>
			</div>
		</div>
	);
};

export default Stopwatch;
