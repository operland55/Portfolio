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
		width: 1440px;
		padding: 114px 0;
	}
`;
export const InfoBtn = styled.button`
	border-radius: 2px;
	border: none;
	padding: 10px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.btnBgColor};
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
	position: absolute;
	top: 50%;
	z-index: 1;
	border: none;
	outline: none;
	background-color: inherit;
	svg {
		font-size: 24px;
		color: ${(props) => props.theme.textColor};
	}
`;
export const ImgBox = styled.div`
	width: 250px;
	height: 300px;
	background-color: #fff;
	border-radius: 50%;
	margin-top: 75px;
	img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	@media ${(props) => props.theme.tablet} {
		width: 500px;
		height: 500px;
		margin-top: 0;
		border-radius: 8px;
	}
`;

export const FlexBox = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${(props) => props.flexDirection};
	gap: ${(props) => props.gap}px;
	align-items: ${(props) => props.alignItems ?? "center"};
	justify-content: ${(props) => props.justifyContent};
`;
