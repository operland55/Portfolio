import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { Container, FlexBox, MoveButton } from "./Element";
import Header from "./Header";
import ProjectDetail from "./ProjectDetail";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Content = styled.div`
	position: relative;
	margin: 0 auto;
	max-width: 1140px;
`;
const Title = styled.h1`
	text-align: center;
	color: ${(props) => props.theme.textColor};
	font-size: 35px;
	margin-top: 80px;
	margin-bottom: 20px;
	@media ${(props) => props.theme.tablet} {
		margin-top: 114px;
	}
`;
const NextBtn = styled(MoveButton)`
	right: 0;
	@media ${(props) => props.theme.desktop} {
		right: 4vw;
		svg {
			font-size: 34px;
		}
	}
`;
const PrevBtn = styled(MoveButton)`
	left: 0;
	@media ${(props) => props.theme.desktop} {
		left: 4vw;
		svg {
			font-size: 34px;
		}
	}
`;
const Items = styled(motion.ul)`
	padding-top: 10vw;
	@media ${(props) => props.theme.tablet} {
		padding-top: 0;
		height: calc(100vh - 360px);
	}
`;
const Item = styled(motion.li)`
	color: ${(props) => props.theme.textColor};
	padding: 0 20px;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;

	@media ${(props) => props.theme.tablet} {
		border-radius: 20px;
		flex-direction: row;
		justify-content: center;
		min-height: 500px;
		gap: 6vw;
		background-image: ${(props) => props.theme.DetailCard};
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
`;
const ImgBox = styled(motion.div)`
	width: 260px;
	height: 170px;
	img {
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
	@media ${(props) => props.theme.tablet} {
		width: 350px;
		height: 220px;
	}
`;

const SiteInfo = styled(FlexBox)`
	flex-direction: column;
	font-size: 3.7vw;
	@media ${(props) => props.theme.tablet} {
		align-items: flex-start;
		max-width: 400px;
		font-size: 16px;
	}
`;
const SiteName = styled.p`
	margin-top: 5.3vw;

	@media${(props) => props.theme.tablet} {
		font-size: 24px;
		margin-top: 10px;
		margin-bottom: 20px;
	}
`;
const Skill = styled.div`
	margin-top: 5px;
	span {
		margin-left: 5px;
	}
`;
const Function = styled.p`
	margin-top: 5px;
	font-size: 14px;
`;
const SimPleInfo = styled.p`
	margin-top: 5.3vw;
	line-height: 1.5;
	@media ${(props) => props.theme.tablet} {
		margin-top: 20px;
	}
`;

const DetailBtn = styled.button`
	color: ${(props) => props.theme.textColor};
	background: ${(props) => props.theme.btnBgColor};
	align-self: flex-end;
	padding: 5px 10px;
	border-radius: 10px;
	margin-top: 30px;
	cursor: pointer;
	outline: none;
	border: none;

	@media ${(props) => props.theme.tablet} {
		padding: 10px 20px;
	}
`;
const Overlay = styled(motion.div)`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: red(0, 0, 0, 0.5);
	opacity: 0;
	position: fixed;
`;
const BigProject = styled(motion.div)`
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	margin: 0 auto;
	background-image: ${(props) => props.theme.DetailCard};
	z-index: 100;
	@media ${(props) => props.theme.tablet} {
		width: 80vw;
		height: 80vh;
		border-radius: 15px;
		overflow-y: auto;
	}
	@media ${(props) => props.theme.desktop} {
		padding-top: 50px;
		width: 50vw;
	}
`;

function Project() {
	const { scrollY } = useViewportScroll();
	const proJectMatch = useMatch("/project/:id");
	const navigate = useNavigate();
	const btn = (e: string) => {
		navigate(`/project/${e}`);
	};
	const [visible, setVisible] = useState(1);
	const [back, setBack] = useState(false);
	const nextPlease = () => {
		setBack(false);
		setVisible((prev) => (prev === Projects.length ? 1 : prev + 1));
	};
	const prevPlease = () => {
		setBack(true);
		setVisible((prev) => (prev === Projects.length ? prev - 1 : prev - 1));
	};
	const boxVariants = {
		normal: {
			scale: 1,
		},
		hover: {
			opacity: 1,
			scale: 1.3,
			y: -40,
			x: -500,
			transition: {
				delay: 0.5,
				duration: 0.5,
				type: "tween",
			},
		},
	};
	const box = {
		invisible: (back: boolean) => ({
			x: back ? -500 : 500,
			opacity: 0,
			scale: 0,
		}),
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
			},
		},
		exit: (back: boolean) => ({
			x: back ? 500 : -500,
			opacity: 0,
			scale: 0,
			transition: { duration: 1 },
		}),
	};

	return (
		<>
			<Content>
				<Title>ProJect</Title>
				<NextBtn>
					{visible == Projects.length ? null : (
						<MdArrowForwardIos onClick={nextPlease} />
					)}
				</NextBtn>
				<PrevBtn>
					{visible == 1 ? null : <MdArrowBackIosNew onClick={prevPlease} />}
				</PrevBtn>

				<Items>
					<AnimatePresence>
						{Projects.map((item: any, key: number) =>
							visible === key + 1 ? (
								<>
									<Item
										custom={back}
										key={key}
										variants={box}
										initial="invisible"
										animate="visible"
										exit="exit"
										layoutId={item.name}
									>
										<ImgBox>
											<img src={item.img} alt="Homepage Img" />
										</ImgBox>

										<SiteInfo>
											<SiteName>{item.name} Site</SiteName>

											<Skill>
												사용언어:
												{item.skill.map((item: any, key: string) => (
													<span key={key}>{item},</span>
												))}
											</Skill>

											<SimPleInfo>주요기능: {item.fun}</SimPleInfo>

											<DetailBtn
												onClick={() => {
													btn(item.name);
												}}
											>
												상세정보
											</DetailBtn>
										</SiteInfo>
									</Item>
								</>
							) : null
						)}
					</AnimatePresence>
				</Items>
			</Content>
			<AnimatePresence>
				{proJectMatch ? (
					<>
						<Overlay
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => navigate(-1)}
						/>
						<BigProject
							style={{ top: scrollY.get() + 100 }}
							layoutId={proJectMatch.params.id}
						>
							<ProjectDetail DetailId={proJectMatch.params.id} />
						</BigProject>
					</>
				) : null}
			</AnimatePresence>{" "}
		</>
	);
}

export default Project;
