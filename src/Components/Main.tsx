import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { Container, FlexBox } from "./Element";
import MyImg from "../assets/MyImg.png";
import { useState } from "react";

const Content = styled(FlexBox)`
	padding: 20px;
	flex-direction: column-reverse;
	gap: 35px;

	@media ${(props) => props.theme.tablet} {
		padding: 150px 30px;
		flex-direction: row;
		justify-content: space-between;
	}
	@media ${(props) => props.theme.desktop} {
		width: 1440px;
		justify-content: space-between;
		gap: 150px;
		padding: 114px 0;
	}
`;
const ContentList = styled(FlexBox)`
	flex-direction: column;
	align-items: center;
	flex: 1;
	gap: 30px;
	@media ${(props) => props.theme.tablet} {
		align-items: flex-start;
	}
`;
const Title = styled.h1`
	font-size: 4vw;
	font-weight: bold;
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
	}
`;
const Name = styled.p`
	padding-top: 20px;
	font-weight: bold;
	font-size: 4vw;
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
	}
`;
const Box = styled(FlexBox)`
	padding-top: 20px;
	gap: 40px;
`;
const BoxItem = styled.p`
	width: 88px;
	height: 38px;
	line-height: 38px;
	text-align: center;
	border-radius: 8px;
	background: ${(props) => props.theme.btnBgColor};
	color: ${(props) => props.theme.textColor};
	border: 1px solid ${(props) => props.theme.borderColor};
`;
const Info = styled.p`
	padding-top: 20px;
	font-size: 3.7vw;
	line-height: 2;
	font-weight: bold;
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
	}
`;
const ImgBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 300px;
	background-color: ${(props) => props.theme.cardBgColor};
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	border-radius: 50%;
	margin-top: 75px;
	img {
		margin-top: 10px;
		display: block;
		width: auto;
		height: 100%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: 0;
		border-radius: 8px;
		img {
			display: block;
			width: auto;
			height: 100%;
		}
	}
	@media ${(props) => props.theme.desktop} {
		width: 450px;
		height: 500px;
		margin-top: 0;
		img {
			margin-top: 100px;
			height: 400px;
		}
	}
`;

function Main() {
	const isDark = useRecoilValue(isDarkAtom);

	return (
		<>
			<Container>
				<Content>
					<ContentList>
						<Title>안녕하세요 </Title>
						<Name>프론트엔드 개발자가 꿈인 정윤재입니다</Name>
						<Info>
							사용자 경험과 UI를 중요하게 생각하기 때문에 기획과 퍼블리싱에도
							관심이 많습니다. 주 분야가 아니더라도 필요하다면 적극적으로
							학습하고 스스로에게 내준 새로운 도전에 끊임없이 도전하고
							해결합니다. <br />
							'느린 것을 두려워 말고, 멈추는 것을 두려워하라' 라는 말이
							있습니다. 어떤 분야든 배움에는 끝이 없습니다. 겸손의 자세로 배움을
							게을리하지 않고, 빠르게 변화하는 트렌드에 맞춰 발전하는 프론트엔드
							개발자가 되겠습니다.
						</Info>
						<Box>
							<BoxItem>
								<Link to="/about">About</Link>
							</BoxItem>
							<BoxItem>
								<Link to="/contact">Contact</Link>
							</BoxItem>
						</Box>
					</ContentList>
					<ImgBox>
						<img src={MyImg} alt="MyImgPic" />
					</ImgBox>
				</Content>
			</Container>
		</>
	);
}

export default Main;
