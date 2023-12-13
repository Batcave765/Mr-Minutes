import "./App.css";
import Header from "./Components/Header";
// import Stopwatch from "./Components/Stopwatch";
import TimeNow from "./Components/TimeNow";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <Stopwatch /> */}
			<TimeNow />
		</div>
	);
}

export default App;
