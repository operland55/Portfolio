import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { FlexBox, MoveButton } from "./Element";
import Header from "./Header";
import ProjectDetail from "./ProjectDetail";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Container = styled.div`
	max-width: 1140px;
	margin: 0 auto;
	padding-top: 114px;
`;

const MainText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.textColor};
	p {
		font-size: 24px;
	}
	h2 {
		font-weight: 600;
		font-size: 48px;
		span {
			color: #e79e15;
		}
	}
`;
const ProjectContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, auto));
	align-items: center;
	gap: 38px;
	margin-top: 80px;
	@media ${(props) => props.theme.tablet} {
		grid-template-columns: repeat(auto-fit, minmax(350px, auto));
	}
`;
const Row = styled(motion.div)`
	position: relative;
	overflow: hidden;
	border-radius: 8px;
	cursor: pointer;
	img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		display: block;
		transition: transform 0.5s;
	}
	&:hover .layer {
		height: 100%;
	}
`;

const Layer = styled.div`
	width: 100%;
	height: 0;
	color: #fff;
	background: linear-gradient(rgba(0, 0, 0, 0.1), #ff004f);
	position: absolute;
	border-radius: 8px;
	left: 0;
	bottom: 0;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 40px;
	transition: height 0.5s;
	h5 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 15px;
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
	&::-webkit-scrollbar {
		display: none;
	}
	background-color: ${(props) => props.theme.DetailCard};
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
		width: 55vw;
		border-radius: 50px;
	}
`;
function Project() {
	const { scrollY } = useViewportScroll();
	const proJectMatch = useMatch("/project/:id");
	const navigate = useNavigate();
	const btn = (e: string) => {
		navigate(`/project/${e}`);
	};
	const [back, setBack] = useState(false);

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
				<div className="project">
					<MainText className="main-text">
						<p>ProJect</p>
						<h2>
							<span>Latest</span> Project
						</h2>
					</MainText>

					<ProjectContent className="project-content">
						{Projects.map((item, key) => (
							<Row
								className="row"
								key={key}
								custom={back}
								variants={box}
								initial="invisible"
								animate="visible"
								exit="exit"
								layoutId={item.name}
							>
								<img src={item.img} alt="img" />
								<Layer className="layer">
									<h5>{item.name}</h5>
									<p>{item.fun}</p>
									<DetailBtn
										onClick={() => {
											btn(item.name);
										}}
									>
										상세정보
									</DetailBtn>
								</Layer>
							</Row>
						))}
					</ProjectContent>
				</div>
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
			</Container>
		</>
	);
}

export default Project;
