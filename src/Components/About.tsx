import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ReactApexChart from "react-apexcharts";
import Chart from "./Chart";
import { Container, FlexBox, ImgBox } from "./Element";
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
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const DivInfo = styled(FlexBox)`
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 60px;
`;

const H1 = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-size: 4.7vw;
	line-height: 25px;
	padding-top: 50px;
	@media ${(props) => props.theme.tablet} {
		font-size: 30px;
		line-height: 50px;
	}
`;
const Info = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	@media ${(props) => props.theme.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
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
	flex-wrap: wrap;
	justify-content: space-around;

	@media ${(props) => props.theme.tablet} {
		padding-top: 30px;
		margin-top: 30px;
	}
`;

function About() {
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
							<H1>
								My Name is Jung Yoon Jae & <br />
								I'am Font-End Developer
							</H1>
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
