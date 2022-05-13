import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
	width: 1440px;
	padding: 114px 0;
	margin: 0 auto;
`;
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
const DivImg = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 40px;
	background-color: #fff;
`;
const DivInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 60px;
`;
const Img = styled.img``;

const H1 = styled.h1`
	color: #fff;
	font-size: 30px;
	line-height: 50px;
`;
const Info = styled.ul`
	display: grid;
	grid-template-columns: 5fr 4fr;
	gap: 10px;
`;
const InfoList = styled.li`
	width: 100%;
	border-radius: 10px;
	background-color: #0f204c;
	color: #fff;
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
const SkillItems = styled.ul`
	padding-top: 30px;
	display: flex;
	margin-top: 30px;
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
	const skills = [
		{
			HTML: "85%",
			CSS: "75%",
		},
		{
			JS: "70%",
			TS: "60%",
			React: "65%",
		},
	];
	const Infos = {
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
						<DivImg>
							<Img></Img>
						</DivImg>
						<DivInfo>
							<H1>
								My Name is Jung Yoon Jae & <br />
								I'am Font-End Developer
							</H1>
							<Info>
								{Object.entries(Infos).map(([key, value]) => (
									<InfoList>
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

						{skills.map((item) => (
							<SkillItems>
								{Object.entries(item).map(([key, value]) => (
									<Skill>
										<div>
											<div>
												<strong>{key}</strong>
											</div>
											<div>{value}</div>
										</div>
									</Skill>
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
