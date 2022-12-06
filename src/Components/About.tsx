import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ReactApexChart from "react-apexcharts";
import Chart from "./Chart";
import { Container, FlexBox } from "./Element";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

const Div = styled.div`
	@media ${(props) => props.theme.tablet} {
		border-radius: 30px;
		padding: 30px;
	}
`;
const Main = styled(FlexBox)`
	padding: 60px;
	flex-direction: column;
	@media ${(props) => props.theme.tablet} {
		gap: 0 30px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const DivInfo = styled(FlexBox)`
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 60px 0;
	@media ${(props) => props.theme.tablet} {
	}
`;

const ImgBox = styled.div`
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
		height: 300px;
		margin-top: 0;
		border-radius: 8px;
	}
	@media ${(props) => props.theme.desktop} {
		height: 500px;
	}
`;
const Greetings = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-size: 18px;
	line-height: 1.5;
	padding-top: 50px;
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
		padding-top: 10px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 24px;
	}
`;
const Info = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`;
const InfoList = styled.li`
	width: 100%;
	border-radius: 8px;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.textColor};
	font-weight: 700;
	padding: 30px;
	font-size: 14px;
	@media ${(props) => props.theme.tablet} {
		padding: 15px 20px;
	}
	@media ${(props) => props.theme.desktop} {
		padding: 30px;
		font-size: 18px;
	}
`;
const SkillBox = styled.div`
	width: 100%;
	height: 100%;
	padding: 60px;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.accentColor};
	font-weight: 700;
	margin-bottom: 30px;
	span {
		border-left: 1px solid red;
		margin-right: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		margin-bottom: 0;
	}
`;
const SkillItems = styled(FlexBox)`
	width: 100%;
	justify-content: space-around;

	@media ${(props) => props.theme.tablet} {
		padding-top: 30px;
		margin-top: 30px;
		flex-wrap: wrap;
	}
`;

function About() {
	const [word, setWord] = useState([
		"노력을하는",
		"열정적인",
		"유행에 뒤쳐지지 않는",
	]);
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	for (let i = 0; word.length; i++) {
	// 		setInterval(() => {
	// 			return setCount((cur) => (cur = cur + 1));
	// 		}, i * 1000);
	// 	}
	// }, [word]);

	const isDark = useRecoilValue(isDarkAtom);
	const skills = [
		{
			HTML: 85,
			CSS: 75,
		},
		{
			JS: 70,
			TS: 60,
			React: 65,
		},
	];
	const infos = {
		Age: 31,
		Phone: "010-5758-9884",
		Language: "Japanese",
		Email: "operland55@naver.com",
		Work: "12",
	};

	return (
		<>
			<Container>
				<Div>
					<Main>
						<ImgBox></ImgBox>

						<DivInfo>
							<Greetings>
								안녕하세요 정윤재입니다 <br />
								저는 누구보다 <span>{word[count]}</span> 개발자가 되고싶습니다
							</Greetings>
							<Info>
								{Object.entries(infos).map(([key, value], index) => (
									<InfoList key={index}>
										{key}: {value}
									</InfoList>
								))}
							</Info>
						</DivInfo>
					</Main>
					<SkillBox>
						<Title className="title">
							<span />
							My Skill
						</Title>

						{skills.map((item, index) => (
							<SkillItems key={index}>
								{Object.entries(item).map(([key, value], index) => (
									<Chart labels={key} possible={value} key={index}></Chart>
								))}
							</SkillItems>
						))}
					</SkillBox>
				</Div>
			</Container>
		</>
	);
}

export default About;
