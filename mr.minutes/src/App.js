import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
import TimeNow from "./Components/TimeNow";
import Timer from "./Components/Timer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/timer" element={<Timer />} />
					<Route path="/stopwatch" element={<Stopwatch />} />
					<Route path="/" element={<TimeNow />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
