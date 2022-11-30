import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import GlobalStyle from "./Components/Context/GlobalStyless";
import About from "./Components/About/About";
import RecipeView from "./Components/RecipeView/RecipeView";
import ErrorPage from "./Components/Layout/ErrorPage";
import Recipe from "./Components/RecipeView/Recipe";
import SearchPage from "./Components/Pages/Search/SearchPage";
import ContactPage from "./Components/Contact/ContactPage";
import Footer from "./Components/Home/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalStyle />
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<About />} />
					<Route path="recipes" element={<RecipeView />}></Route>
					<Route path="recipe/:id" element={<Recipe />} />
					<Route path="/searched/:search" element={<SearchPage />} />
					<Route path="contact" element={<ContactPage />} />

					<Route
						path="*"
						element={<ErrorPage msg="404 Error! Page not found." />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
