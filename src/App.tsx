import { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import ProjectDetail from "./Components/ProjectDetail";

function App() {
	const isDark = useRecoilValue(isDarkAtom);

	return (
		<ThemeProvider theme={isDark ? lightTheme : darkTheme}>
			<BrowserRouter>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/project" element={<Project />}>
						<Route path="/project/:id" element={<ProjectDetail />} />{" "}
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
