import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { Container, FlexBox } from "./Element";
import MyImg from "../assets/MyImg.png";

const Content = styled(FlexBox)`
	padding: 20px;
	flex-direction: column-reverse;
	gap: 35px;
	@media ${(props) => props.theme.tablet} {
		width: 1440px;
		padding: 114px 0;
		flex-direction: row;
		gap: 0px;
		margin: 0 auto;
		justify-content: space-between;
		gap: 150px;
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
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
	}
`;
const Name = styled.p`
	padding-top: 20px;
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
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.accentColor};
	border: 1px solid ${(props) => props.theme.borderColor};
	&:first-child {
	}
`;
const Info = styled.p`
	padding-top: 20px;
	font-size: 3.7vw;
	line-height: 2;

	@media ${(props) => props.theme.tablet} {
		font-size: 24px;
	}
`;
const ImgBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 300px;
	background-color: #212e4d;
	border-radius: 50%;
	margin-top: 75px;
	img {
		margin-top: 10px;
		display: block;
		width: auto;
		height: 100%;
	}
	@media ${(props) => props.theme.tablet} {
		width: 450px;
		height: 500px;
		margin-top: 0;
		border-radius: 8px;
		img {
			margin-top: 100px;
			display: block;
			width: auto;
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
							학습하고 스스로에게 내준 새로운 챌린지에 끊임없이 도전하고
							해결합니다.
						</Info>
						<Box>
							<BoxItem>
								<Link to="/about">About</Link>
							</BoxItem>
							<BoxItem>
								<Link to="/">Contact</Link>
							</BoxItem>
						</Box>
					</ContentList>
					<ImgBox>
						<img src={MyImg} alt="" />
					</ImgBox>
				</Content>
			</Container>
		</>
	);
}

export default Main;
