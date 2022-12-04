import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../object";
import { Container, FlexBox } from "./Element";
import Header from "./Header";
import ProjectDetail from "./ProjectDetail";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";

const Title = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-size: 35px;
`;
const Content = styled.div``;
const Items = styled(motion.ul)`
	margin: 0 auto;
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 20px 0px;
	@media ${(props) => props.theme.tablet} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const Item = styled(motion.li)`
	background-color: ${(props) => props.theme.cardBgColor};
	width: 300px;
	height: 300px;
	/* padding: 15px; */
	margin: 0 auto;
	border-radius: 10px;
	cursor: pointer;
	img {
		display: block;
		padding: 10px;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
	@media ${(props) => props.theme.tablet} {
	}
`;
const ProjectName = styled.p`
	font-weight: 700;
	font-size: 12px;
	color: ${(props) => props.theme.textColor};
`;

const LiveDemo = styled.button`
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.btnBgColor};
	flex: 1;
	border-radius: 2px;
	border: none;
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
	background-color: black;
	@media ${(props) => props.theme.tablet} {
		width: 40vw;
		height: 80vh;

		border-radius: 15px;
		overflow-y: auto;
	}
`;

function Project() {
	const { scrollY } = useViewportScroll();
	const proJectMatch = useMatch("/project/:id");
	const navigate = useNavigate();
	const btn = (e: string) => {
		navigate(`/project/${e}`);
	};
	const boxVariants = {
		normal: {
			scale: 1,
		},

		hover: {
			opacity: 1,
			scale: 1.3,
			y: 80,
			transition: {
				delay: 0.5,
				duration: 0.5,
				type: "tween",
			},
		},
	};

	return (
		<>
			<Container>
				<Content>
					<Title>ProJect</Title>
					<Items>
						<AnimatePresence>
							{Projects.map((item: any, key: number) => (
								<Item
									key={key}
									variants={boxVariants}
									layoutId={item.name}
									whileHover="hover"
									onClick={() => {
										btn(item.name);
									}}
								>
									{/* <ProjectName>{item.name}</ProjectName> */}
									<img src={item.img} alt="Homepage Img" />
								</Item>
							))}
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
				</AnimatePresence>
			</Container>
		</>
	);
}

export default Project;
