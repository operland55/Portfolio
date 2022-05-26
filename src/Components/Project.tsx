import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Img } from "./Element";
import Header from "./Header";

const Title = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-size: 35px;
`;
const Content = styled.div`
	padding: 50px;
`;
const Items = styled.ul`
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
const Item = styled.li`
	background-color: ${(props) => props.theme.cardBgColor};
	width: 300px;
	padding: 15px;
	margin: 0 auto;
	border-radius: 8px;
`;
const ProjectName = styled.p`
	font-weight: 700;
	color: ${(props) => props.theme.textColor};
`;

const MoveSite = styled.div`
	display: flex;
	gap: 15px;
`;
const Github = styled.button`
	color: #6e9bd9;
	border: none;
	border-radius: 2px;
	flex: 1;
	padding: 10px;
`;
const LiveDemo = styled.button`
	color: #0a5187;
	background-color: #4cb6f9;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2px;
	border: none;
`;
function Project() {
	const Projects = {
		NetFlex: "../NetFlex.jpg",
		BitCoin: "../NetFlex.jpg",
		WebSite: "../NetFlex.jpg",
	};
	return (
		<>
			<Header />
			<Container>
				<Content>
					<Items>
						{Object.entries(Projects).map(([key, value], index) => (
							<Item key={index}>
								<ProjectName>{key}</ProjectName>
								<Img
									src={value}
									width={"100%"}
									height={"auto"}
									margin={"30px 0"}
								></Img>

								<Link to={`/${value}`}>
									<MoveSite>
										<Github>Github</Github>
										<LiveDemo>LiveDemo</LiveDemo>
									</MoveSite>
								</Link>
							</Item>
						))}
					</Items>
				</Content>
			</Container>
		</>
	);
}

export default Project;
