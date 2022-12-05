import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { Container, FlexBox, MoveButton } from "./Element";
import Header from "./Header";
import ProjectDetail from "./ProjectDetail";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Title = styled.h1`
	text-align: center;
	color: ${(props) => props.theme.textColor};
	font-size: 35px;
	margin-top: 80px;
	margin-bottom: 20px;
	@media ${(props) => props.theme.tablet} {
		margin-top: 0;
	}
`;
const Content = styled.div``;
const Items = styled(motion.ul)`
	position: relative;
	display: flex;
`;
const Item = styled(motion.li)`
	padding: 0 20px;
	display: flex;
	width: 100%;
	position: absolute;
	flex-direction: column;
	align-items: center;
	border-radius: 40px;

	@media ${(props) => props.theme.tablet} {
	}
`;
const ImgBox = styled(motion.div)`
	width: 300px;
	height: 220px;
	img {
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
`;
const NextBtn = styled(MoveButton)`
	right: 5px;
`;
const PrevBtn = styled(MoveButton)`
	left: 5px;
`;

const SiteName = styled.p`
	margin-top: 5.3vw;
`;
const SimPleInfo = styled.p`
	margin-top: 5.3vw;
	line-height: 1.5;
`;

const DetailBtn = styled.button`
	align-self: flex-end;
	padding: 5px 10px;
	background-color: ${(props) => props.theme.btnBgColor};
	border-radius: 10px;
	margin-top: 2.6vw;
	outline: none;
	border: none;
	flex-grow: 1;
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
			<Container>
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
											<SiteName>{item.name}</SiteName>
											<SimPleInfo>{item.introduce}</SimPleInfo>

											<DetailBtn
												onClick={() => {
													btn(item.name);
												}}
											>
												상세정보
											</DetailBtn>
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
			</Container>
		</>
	);
}

export default Project;
