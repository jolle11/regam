import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer, Header } from "./components";
import { Home, Login, Register, Space } from "./pages";

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/space/:name" element={<Space />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
				<Footer />
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
