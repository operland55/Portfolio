import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 1440px;
	height: 100vh;
	padding: 114px 0;
	margin: 0 auto;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 150px;
`;
const Content = styled.div`
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
const Img = styled.div`
	width: 500px;
	height: 500px;
	border-radius: 50%;
	background-color: #786fff;
	color: black;
`;
function Main() {
	return (
		<>
			<Container>
				<Content>
					<Plist>Welcome to my World!</Plist>
					<Name>I'm Jung Yoon jae</Name>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam
						id neque quod ea expedita nulla nobis architecto vitae ab facilis
						minus tempora, itaque porro provident sapiente dolorem consectetur
						eveniet!
					</p>
					<Box>
						<BoxItem>
							<Link to="/about">About</Link>
						</BoxItem>
						<BoxItem>
							<Link to="/">Contact</Link>
						</BoxItem>
					</Box>
				</Content>
				<Img></Img>
			</Container>
		</>
	);
}

export default Main;
