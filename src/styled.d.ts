import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		textColor: string;
		bgColor: string;
		accentColor?: string;
		cardBgColor: string;
		btnBgColor: string;
		borderColor: string;
		hoveColor: string;
		imgBgColor: string;
		mobile: string;
		tabletM: string;
		desktop: string;
	}
}