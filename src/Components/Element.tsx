import styled from "styled-components";

interface ImgSize {
	width: string;
	height: string;
	margin?: string;
	backgroundColor?: string;
}

export const Container = styled.div`
	width: 1440px;
	padding: 114px 0;
	margin: 0 auto;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.bgColor};
`;

export const Img = styled.img<ImgSize>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: 8px;
	background-color: ${(props) => props.backgroundColor};
	margin: ${(props) => props.margin};
`;
