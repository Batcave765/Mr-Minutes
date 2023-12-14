import React, { useState, useEffect } from "react";
import Header from "./Header";

const Stopwatch = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [startTime, setStartTime] = useState(0);
	const [elapsedTime, setElapsedTime] = useState(0);

	useEffect(() => {
		let animationFrameId;

		const updateElapsedTime = () => {
			setElapsedTime(performance.now() - startTime);
			animationFrameId = requestAnimationFrame(updateElapsedTime);
		};

		if (isRunning) {
			setStartTime(performance.now());
			updateElapsedTime();
		} else {
			cancelAnimationFrame(animationFrameId);
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [isRunning, startTime]);

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
		const milliseconds = Math.floor(time) % 1000;
		const seconds = Math.floor(time / 1000) % 60;
		const minutes = Math.floor(time / (60 * 1000));

		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
			2,
			"0"
		)}.${String(milliseconds).padStart(3, "0")}`;
	};

	return (
		<>
			<Header />
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
		</>
	);
};

export default Stopwatch;
