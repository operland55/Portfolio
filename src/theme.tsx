import { DefaultTheme } from "styled-components";

const size = {
	tablet: "768px",
	desktop: "1024px",
};

export const darkTheme: DefaultTheme = {
	bgColor: "#0c1934",
	textColor: "#fff",
	accentColor: "#4cb6f9",
	btnBgColor:
		"linear-gradient(90deg, rgba(38,27,223,1) 0%, rgba(34,26,172,1) 35%, rgba(18,14,89,1) 75%)",
	borderColor: "#4cb6f9",
	cardBgColor: "#0f204c",
	hoveColor: "#4cb6f9",
	DetailCard: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);",
	DetailCardFontColor: "#fff",
	tablet: `(min-width:${size.tablet})`,
	desktop: `(min-width:${size.desktop})`,
};

export const lightTheme: DefaultTheme = {
	bgColor: "#fbfbfe",
	textColor: "#black",
	accentColor: "#4cb6f9",
	cardBgColor: "#f6f6f6",
	btnBgColor:
		"radial-gradient(circle, rgba(255,253,254,1) 0%, rgba(246,245,245,1) 50%, rgba(188,215,247,1) 100%);",
	borderColor: "#f0a721",
	hoveColor: "#aabbe6",
	DetailCard: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);",
	DetailCardFontColor: "#666",
	tablet: `(min-width:${size.tablet})`,
	desktop: `(min-width:${size.desktop})`,
};
