import React from "react";
import alarm from "../Assets/alarm.mp3";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			countdown: 0,
			isRunning: false,
		};
		this.audioRef = React.createRef(); // Create a ref for the audio element
	}

	startTimer = () => {
		const { time } = this.state;
		this.setState({
			countdown: time,
			isRunning: true,
		});

		this.timerInterval = setInterval(() => {
			this.setState((prevState) => ({
				countdown: prevState.countdown - 1,
			}));

			if (this.state.countdown === 0) {
				clearInterval(this.timerInterval);
				this.setState({ isRunning: false });
				this.audioRef.current.play(); // Play the audio when countdown reaches 0
			}
		}, 1000);
	};

	stopTimer = () => {
		clearInterval(this.timerInterval);
		this.setState({ isRunning: false });
	};

	handleTimeChange = (event) => {
		this.setState({ time: parseInt(event.target.value) });
	};

	formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;

		return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
			.toString()
			.padStart(2, "0")}`;
	};
	handleCustomTimer = (seconds) => {
		this.setState({
			time: seconds,
			countdown: seconds,
		});
	};
	render() {
		const { time, countdown, isRunning } = this.state;

		return (
			<div className="content">
				<div className="inner">
					<h1>Timer</h1>
					<div className="custom-timer-buttons">
						<button onClick={this.startTimer} disabled={isRunning}>
							Start Timer
						</button>
						<button onClick={this.stopTimer} disabled={!isRunning}>
							Stop Timer
						</button>
					</div>
					<br />
					<div>
						Countdown: <br /> <h1>{this.formatTime(countdown)}</h1>
					</div>
					<br />
					<div className="custom-timer-buttons">
						<button onClick={() => this.handleCustomTimer(60)}>1 Minute</button>
						<button onClick={() => this.handleCustomTimer(300)}>
							5 Minutes
						</button>
						<button onClick={() => this.handleCustomTimer(600)}>
							10 Minutes
						</button>
						<button onClick={() => this.handleCustomTimer(900)}>
							15 Minutes
						</button>
						<button onClick={() => this.handleCustomTimer(1800)}>
							30 Minutes
						</button>
						<button onClick={() => this.handleCustomTimer(2700)}>
							45 Minutes
						</button>
						<button onClick={() => this.handleCustomTimer(3600)}>1 Hour</button>
					</div>
					<h4>Or enter your own time:</h4>
					<label>
						Enter time in seconds:
						<input
							type="number"
							value={time}
							onChange={this.handleTimeChange}
						/>
					</label>
					<br />
				</div>
				<audio ref={this.audioRef} src={alarm} />{" "}
			</div>
		);
	}
}

export default Timer;
