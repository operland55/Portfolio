import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Img } from "./Element";

const Content = styled.div`
	width: 1440px;
	padding: 114px 0;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 150px;
`;
const ContentList = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 30px;
`;
const Plist = styled.p`
	font-size: 22px;
`;
const Name = styled.h1`
	font-size: 35px;
`;
const Box = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	gap: 40px;
`;
const BoxItem = styled.p`
	width: 88px;
	height: 38px;
	line-height: 38px;
	text-align: center;
	background-color: #786fff;
	&:first-child {
		background-color: gray;
	}
`;

function Main() {
	return (
		<>
			<Container>
				<Content>
					<ContentList>
						<Plist>Welcome to my World!</Plist>
						<Name>I'm Jung Yoon jae</Name>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
							magnam id neque quod ea expedita nulla nobis architecto vitae ab
							facilis minus tempora, itaque porro provident sapiente dolorem
							consectetur eveniet!
						</p>
						<Box>
							<BoxItem>
								<Link to="/about">About</Link>
							</BoxItem>
							<BoxItem>
								<Link to="/">Contact</Link>
							</BoxItem>
						</Box>
					</ContentList>
					<Img
						width={"500px"}
						height={"500px"}
						backgroundColor={"#786fff;"}
					></Img>
				</Content>
			</Container>
		</>
	);
}

export default Main;
