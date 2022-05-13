import { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
