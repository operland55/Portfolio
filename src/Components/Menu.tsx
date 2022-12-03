import React from "react";
import styled from "styled-components";
import { FlexBox, MenuIcon } from "./Element";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { menuBtn } from "../atom";
import { useNavigate } from "react-router-dom";
const MenuContents = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.bgColor};
	z-index: 100;
	@media ${(props) => props.theme.mobile} {
		visibility: hidden;
	}
`;
const Close = styled(MenuIcon)``;
const Nav = styled(FlexBox)`
	flex-direction: column;
	justify-content: center;
	height: 100%;
	gap: 50px;
	color: ${(props) => props.theme.textColor};
`;
const Item = styled.div`
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.theme.hoveColor};
	}
`;
function Menu() {
	const setBtn = useSetRecoilState(menuBtn);
	const navigate = useNavigate();

	const navName = ["Home", "About", "ProJect", "Contact"];
	const closeBtn = () => {
		setBtn((cur) => !cur);
	};

	const itemMove = (e: string) => {
		e === "Home" ? navigate(`/`) : navigate(`/${e}`);
	};
	return (
		<>
			<MenuContents>
				<Close onClick={closeBtn}>
					<AiOutlineCloseCircle />
				</Close>
				<Nav>
					{navName.map((item, key) => (
						<>
							<Item
								key={key}
								onClick={() => {
									itemMove(item);
								}}
							>
								{item}
							</Item>
						</>
					))}
				</Nav>
			</MenuContents>
		</>
	);
}

export default Menu;
