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
		flex-direction: row;
		justify-content: center;
		min-height: 500px;
		gap: 6vw;
	}
`;
const ImgBox = styled(motion.div)`
	height: 220px;
	img {
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
	@media ${(props) => props.theme.tablet} {
		width: 350px;
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
	background-color: ${(props) => props.theme.btnBgColor};
	align-self: flex-end;
	padding: 5px 10px;
	border-radius: 10px;
	margin-top: 2.6vw;
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
	background-color: #232323;
	z-index: 100;
	@media ${(props) => props.theme.tablet} {
		width: 80vw;
		height: 80vh;
		border-radius: 15px;
		overflow-y: auto;
	}
	@media ${(props) => props.theme.desktop} {
		width: 40vw;
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
		setVisible((prev) => (prev === Projects.length ? 1 : prev - 1));
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
					<MdArrowForwardIos onClick={nextPlease} />
				</NextBtn>
				<PrevBtn>
					<MdArrowBackIosNew onClick={prevPlease} />
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
											<SiteName>{item.name}</SiteName>
											<SimPleInfo>{item.introduce}</SimPleInfo>

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
							style={{ top: scrollY.get() + 20 }}
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
