import { DefaultTheme } from "styled-components";

const size = {
	mobile: "770px",
	tabletM: "1220px",
	desktop: "1460px",
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
	mobile: `(min-width:${size.mobile})`,
	tabletM: `(min-width:${size.tabletM})`,
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
	mobile: `(min-width:${size.mobile})`,
	tabletM: `(min-width:${size.tabletM})`,
	desktop: `(min-width:${size.desktop})`,
};
