import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ReactApexChart from "react-apexcharts";
import Chart from "./Chart";
import { Container, Img } from "./Element";

const Div = styled.div`
	border-radius: 30px;
	padding: 30px;
`;
const Main = styled.main`
	padding: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DivInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 60px;
`;

const H1 = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-size: 30px;
	line-height: 50px;
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
	padding: 30px;
	font-size: 18px;
	font-weight: 700;
`;
const SkillBox = styled.div`
	width: 100%;
	height: 100%;
	padding: 60px;
`;

const Title = styled.h1`
	color: #fff;
	font-weight: 700;
	font-size: 22px;
	span {
		border-left: 1px solid red;
		margin-right: 10px;
	}
`;
const SkillItems = styled.div`
	padding-top: 30px;
	display: flex;
	justify-content: space-around;
	margin-top: 30px;
	color: red;
`;
const Skill = styled.li`
	position: relative;
	width: 108px;
	height: 100px;
	border-radius: 50%;
	font-size: 20px;
	margin: 0 auto;
	background-color: #d4d2f5;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-weight: 700;
	text-align: center;
`;

function About() {
	// const observer = new IntersectionObserver(
	// 	(entries) => {
	// 		entries.forEach((e) => {

	// 		});
	// 	},
	// 	{ threshold:  }
	// );
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
			<Header />
			<Container>
				<Div>
					<Main>
						<Img width={"350px"} height={"350px"} backgroundColor={"#fff"}>
							{/* <Img width={"500px"} height={'200px'}></Img> */}
						</Img>
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
						<Title>
							<span />
							My Skill
						</Title>

						{skills.map((item, index) => (
							<SkillItems key={index}>
								{Object.entries(item).map(([key, value], index) => (
									<Chart possible={value} labels={key} key={index}></Chart>
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
