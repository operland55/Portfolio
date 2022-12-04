import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { FlexBox } from "./Element";
import TomorrowSite from "../assets/Tomorrow-Home-Desk.jpg";
const Content = styled.div`
	padding: 25px;
	@media ${(props) => props.theme.tablet} {
		height: 100%;
	}
`;
const ImgBox = styled.div`
	img {
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media ${(props) => props.theme.tablet} {
		height: 50vh;
	}
`;

const Info = styled(FlexBox)`
	padding-top: 20px;
	justify-content: start;
	gap: 0px 30px;
`;
const Period = styled.p`
	span {
		color: gray;
	}
	@media ${(props) => props.theme.tablet} {
	}
`;
const Introduce = styled.p`
	padding-top: 20px;
	line-height: 2;
`;
const Skill = styled.p`
	color: gray;
	span {
		padding: 5px 10px;
		margin-left: 5px;
		border-radius: 20px;
		background-color: red;
		color: #fff;
	}
`;
const MoveSite = styled(FlexBox)`
	gap: 15px;
	align-items: inherit;
`;
const Github = styled.button`
	color: #6e9bd9;
	background-color: transparent;
	border: none;
	border-radius: 2px;
	flex: 1;
	padding: 10px;
`;
function ProjectDetail({ DetailId }: any) {
	return (
		<>
			{Projects.map((item, key) =>
				DetailId == item.name ? (
					<>
						<Content>
							<ImgBox>
								<img src={item.img} alt="Img" />
							</ImgBox>
							<Info>
								<Period>
									<span>기간:</span> {item.period}
								</Period>
								<Skill>
									스킬:
									{item.skill.map((i) => (
										<span>{i}</span>
									))}
								</Skill>
							</Info>
							<Introduce>{item.introduce}</Introduce>
						</Content>
					</>
				) : null
			)}
		</>
	);
}

export default ProjectDetail;
