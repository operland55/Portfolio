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
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Nanum+Gothic:wght@400;700;800&family=Newsreader:ital,opsz,wght@1,6..72,600&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  background-color: ${(props) => props.theme.bgColor};
  overflow-x: hidden;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Nanum Gothic', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;
function App() {
	const isDark = useRecoilValue(isDarkAtom);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/project" element={<Project />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
