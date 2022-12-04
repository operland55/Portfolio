import { Link, NavLink, useMatch } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import { FiSun, FiMenu } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, menuBtn } from "../atom";
import { FlexBox, MenuIcon } from "./Element";
import MenuScreen from "./Menu";
import { motion, useAnimation } from "framer-motion";
interface Border {
	borderBottom?: string;
}
const Nav = styled.header`
	display: none;
	position: relative;
	transition: opacity 1s ease-in-out;

	@media ${(props) => props.theme.tablet} {
		display: block;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0;
		color: ${(props) => props.theme.textColor};
		padding: 30px;
		background-color: ${(props) => props.theme.bgColor};
	}
`;
const NavChild = styled(FlexBox)`
	margin: 0 auto;
	max-width: 1440px;
	height: 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Title = styled.h1`
	width: 170px;
	font-size: 32px;
	@media ${(props) => props.theme.tablet} {
		font-size: 45px;
	}
`;
const Items = styled(FlexBox)`
	gap: 50px;
	flex-direction: row;
	visibility: hidden;
	@media ${(props) => props.theme.tablet} {
		visibility: visible;
	}
`;
const Item = styled(motion.p)`
	position: relative;
	font-size: 20px;
	&:hover {
		color: ${(props) => props.theme.hoveColor};
	}
`;
const ItemBorder = styled(motion.span)`
	width: 100%;
	height: 2px;
	position: absolute;
	background-color: red;
	bottom: -5px;
	left: 0;
`;
const Switch = styled(FlexBox)`
	align-items: center;
	justify-content: center;
	width: 170px;
`;
const SwitchImg = styled.p`
	cursor: pointer;
`;

function Header() {
	const [IsDark, SetIsDark] = useRecoilState(isDarkAtom);
	const [btn, setBtn] = useRecoilState(menuBtn);
	const [className, setClassName] = useState("");
	const homeMatch = useMatch("/");
	const aboutMatch = useMatch("/about");
	const projectMatch = useMatch("/project");

	const Btn = () => {
		SetIsDark((cur) => !cur);
	};

	const MenuBtn = () => {
		setBtn(!btn);
	};
	return (
		<>
			<MenuIcon onClick={MenuBtn}>
				<FiMenu />
			</MenuIcon>

			<Nav>
				<NavChild>
					<Title>Portfolio</Title>
					<Items>
						<Item>
							<NavLink to="/">
								Home{homeMatch && <ItemBorder layoutId="border-bottom" />}
							</NavLink>
						</Item>
						<Item>
							<NavLink to="/about">
								About{aboutMatch && <ItemBorder layoutId="border-bottom" />}
							</NavLink>
						</Item>
						<Item>
							<NavLink to="/project">
								Project{projectMatch && <ItemBorder layoutId="border-bottom" />}
							</NavLink>
						</Item>
						<Item>
							<NavLink to="/">Contact</NavLink>
						</Item>
					</Items>
					<Switch>
						<SwitchImg onClick={Btn}>
							{IsDark ? <HiMoon size={25} /> : <FiSun size={25} />}
						</SwitchImg>
					</Switch>
				</NavChild>
			</Nav>

			{btn ? <MenuScreen /> : null}
		</>
	);
}

export default Header;
