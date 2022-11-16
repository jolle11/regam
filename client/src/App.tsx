import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home, Login, Register } from "./pages";
import { Header } from "./components";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* TODO: Spaces will come from the dropdown */}
						{/* <Route path="/spaces" element={<Spaces />} /> */}
						{/* TODO: Space will be a page */}
						{/* <Route path="/space/:spaceName" element={<Space />} /> */}
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
