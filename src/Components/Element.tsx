import styled from "styled-components";

interface ImgSize {
	width: string;
	height: string;
	margin?: string;
	backgroundColor?: string;
}
interface FlexProps {
	gap?: number;
	justifyContent?: string;
	alignItems?: string;
	flexDirection?: string;
}

export const Container = styled.div`
	margin: 0 auto;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.bgColor};
	@media ${(props) => props.theme.tablet} {
		padding: 114px 0;
	}
	@media ${(props) => props.theme.desktop} {
		max-width: 1440px;
		padding: 114px 0;
	}
`;
export const InfoBtn = styled.button`
	cursor: pointer;
	border-radius: 2px;
	border: none;
	padding: 10px;
	border-radius: 8px;
	background: ${(props) => props.theme.btnBgColor};
	color: ${(props) => props.theme.textColor};
`;
export const MenuIcon = styled.div`
	position: absolute;
	cursor: pointer;
	top: 15px;
	right: 15px;
	svg {
		color: ${(props) => props.theme.textColor};
		font-size: 24px;
	}
	@media ${(props) => props.theme.tablet} {
		display: none;
	}
`;
export const MoveButton = styled.button`
	cursor: pointer;
	position: absolute;
	top: 60%;
	transform: translateY(-50%);
	z-index: 1;
	border: none;
	outline: none;
	background-color: inherit;
	svg {
		font-size: 24px;
		color: ${(props) => props.theme.textColor};
	}
`;

export const FlexBox = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${(props) => props.flexDirection};
	gap: ${(props) => props.gap}px;
	align-items: ${(props) => props.alignItems ?? "center"};
	justify-content: ${(props) => props.justifyContent};
`;
