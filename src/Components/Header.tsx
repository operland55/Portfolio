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
		padding: 30px;
		position: fixed;
		top: 0;
		left: 0;
		color: ${(props) => props.theme.textColor};
		background-color: ${(props) => props.theme.bgColor};
	}
	@media ${(props) => props.theme.desktop} {
	}
`;
const NavChild = styled(FlexBox)`
	margin: 0 auto;
	max-width: 1440px;
	align-items: center;
	justify-content: space-between;
`;
const Title = styled.h1`
	width: 170px;
	font-size: 32px;
	@media ${(props) => props.theme.desktop} {
		font-size: 45px;
	}
`;
const Items = styled(FlexBox)`
	gap: 50px;
	@media ${(props) => props.theme.desktop} {
		gap: 50px;
	}
`;
const Item = styled(motion.p)`
	position: relative;
	font-size: 12spx;
	&:hover {
		color: ${(props) => props.theme.hoveColor};
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 20px;
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
	width: 50px;
	align-items: center;
	justify-content: flex-end;
	@media ${(props) => props.theme.desktop} {
		width: 170px;
		justify-content: center;
	}
`;
const SwitchImg = styled.p`
	cursor: pointer;
`;
const MobileSwitchImg = styled.p`
	cursor: pointer;
	position: absolute;
	right: 35px;
	color: ${(props) => props.theme.textColor};
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
			<MenuIcon>
				<MobileSwitchImg onClick={Btn}>
					{IsDark ? <HiMoon size={25} /> : <FiSun size={25} />}
				</MobileSwitchImg>
				<FiMenu onClick={MenuBtn} />
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
