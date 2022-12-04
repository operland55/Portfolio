import { DefaultTheme } from "styled-components";

const size = {
	tablet: "768px",
	desktop: "1024px",
};

export const darkTheme: DefaultTheme = {
	bgColor: "#0c1934",
	textColor: "#fff",
	accentColor: "#4cb6f9",
	btnBgColor: "#4cb6f9",
	borderColor: "#4cb6f9",
	cardBgColor: "#0f204c",
	hoveColor: "#4cb6f9",
	imgBgColor: "#2f3542;",
	tablet: `(min-width:${size.tablet})`,
	desktop: `(min-width:${size.desktop})`,
};

export const lightTheme: DefaultTheme = {
	bgColor: "#fbfbfe",
	textColor: "#black",
	accentColor: "#4cb6f9",
	cardBgColor: "#f6f6f6",
	btnBgColor: "#f0a721",
	borderColor: "#f0a721",
	hoveColor: "#aabbe6",
	imgBgColor: "#e7e5e5",
	tablet: `(min-width:${size.tablet})`,
	desktop: `(min-width:${size.desktop})`,
};
