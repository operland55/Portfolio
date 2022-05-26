import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "@/atom";

const Nav = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.textColor};
	padding: 30px;
	background-color: ${(props) => props.theme.bgColor};
	@media (max-width: 568px) {
		display: none;
	} ;
`;
const NavChild = styled.div`
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
	&:hover {
		color: blue;
	}
`;
const Switch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 170px;
`;
const SwitchImg = styled.p`
	cursor: pointer;
`;
function Header() {
	const [IsDark, SetIsDark] = useRecoilState(isDarkAtom);
	const Btn = () => {
		SetIsDark((cur) => !cur);
	};
	console.log(SetIsDark);
	return (
		<>
			<Nav>
				<NavChild>
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
						<SwitchImg onClick={Btn}>
							{IsDark ? <FiSun size={25} /> : <HiMoon size={25} />}
						</SwitchImg>
					</Switch>
				</NavChild>
			</Nav>
		</>
	);
}

export default Header;
