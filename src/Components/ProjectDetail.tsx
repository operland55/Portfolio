import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { FlexBox, InfoBtn } from "./Element";
import TomorrowSite from "../assets/Tomorrow-Home-Desk.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Content = styled.div`
	padding: 25px;
	@media ${(props) => props.theme.tablet} {
		height: 100%;
	}
`;
const ImgBox = styled.div`
	position: relative;
	&:hover svg {
		color: red;
	}
	img {
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	svg {
		font-size: 24px;
		position: absolute;
		cursor: pointer;
		top: 5px;
		right: 5px;
		color: #232323;
	}
	@media ${(props) => props.theme.tablet} {
		height: 50vh;
	}
`;

const Info = styled(FlexBox)`
	padding-top: 20px;
	gap: 10px 10px;
	font-size: 12px;
	flex-direction: column;
	align-items: flex-start;
	@media ${(props) => props.theme.tablet} {
		justify-content: start;
		gap: 15px;
		font-size: 16px;
	}
`;
const ProjectName = styled.p`
	color: ${(props) => props.theme.DetailCardFontColor};
	span {
		color: #666;
	}
`;
const Period = styled.p`
	color: ${(props) => props.theme.DetailCardFontColor};
	span {
		color: #666;
	}
	@media ${(props) => props.theme.tablet} {
	}
`;
const Introduce = styled.p`
	padding-top: 20px;
	line-height: 2;
	color: ${(props) => props.theme.DetailCardFontColor};
`;
const Skill = styled.p`
	color: #666;
	flex-shrink: 0;
	span {
		padding: 5px;
		margin-left: 5px;
		border-radius: 20px;
		background-color: red;
		color: #fff;
	}
	@media ${(props) => props.theme.tablet} {
		span {
			padding: 5px 10px;
		}
	}
`;
const MoveSite = styled(FlexBox)`
	padding: 10px 0;
	justify-content: flex-end;
	gap: 15px;
	align-items: inherit;
	color: ${(props) => props.theme.textColor};
`;
const LiveDemo = styled(InfoBtn)``;
const Github = styled(InfoBtn)``;
function ProjectDetail({ DetailId }: any) {
	const navigate = useNavigate();
	return (
		<>
			{Projects.map((item, key) =>
				DetailId == item.name ? (
					<>
						<Content>
							<ImgBox>
								<img src={item.img} alt="Img" />
								<AiOutlineCloseCircle
									onClick={() => {
										navigate(-1);
									}}
								/>
							</ImgBox>
							<Info>
								<ProjectName>
									<span>이름:</span> {item.name}
								</ProjectName>
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
							<MoveSite>
								<Github
									onClick={() => {
										window.open(item.github);
									}}
								>
									Github
								</Github>
								<LiveDemo
									onClick={() => {
										window.open(item.liveDemo);
									}}
								>
									LiveDemo
								</LiveDemo>
							</MoveSite>
						</Content>
					</>
				) : null
			)}
		</>
	);
}

export default ProjectDetail;
