import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";

const Nav = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	color: #fff;
	padding: 30px;
`;
const Navchild = styled.div`
	max-width: 1440px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
`;
const Title = styled.h1`
	width: 170px;
	font-size: 45px;
`;
const Items = styled.div`
	display: flex;
	gap: 50px;
`;
const Item = styled.p`
	font-size: 20px;
`;
const Switch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 170px;
`;
const SwitchImg = styled.p`
	width: 30px;
	height: 10px;
	background-color: #fff;
`;
function Header() {
	return (
		<>
			<Nav>
				<Navchild>
					<Title>Portfolio</Title>
					<Items>
						<Item>
							<NavLink to="/">Home</NavLink>
						</Item>
						<Item>
							<NavLink to="/about">About</NavLink>
						</Item>
						<Item>
							<NavLink to="/project">Project</NavLink>
						</Item>
						<Item>
							<NavLink to="/">Contact</NavLink>
						</Item>
					</Items>
					<Switch>
						<SwitchImg />
					</Switch>
				</Navchild>
			</Nav>
		</>
	);
}

export default Header;
