import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import GlobalStyle from "./Components/Context/GlobalStyless";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalStyle />
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
