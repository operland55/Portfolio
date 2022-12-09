import React from "react";
import styled from "styled-components";
import { Container, FlexBox } from "./Element";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Content = styled.div`
	padding: 80px 20px 0 20px;
	color: ${(props) => props.theme.textColor};
	@media ${(props) => props.theme.tablet} {
		padding: 0px;
	}
`;
const Title = styled.p`
	font-size: 36px;
	margin-bottom: 20px;
	text-align: center;
`;
const Contents = styled.p`
	margin-bottom: 40px;
	text-align: center;
	@media ${(props) => props.theme.tablet} {
		margin-bottom: 80px;
	}
`;
const ContainerBox = styled(FlexBox)`
	padding: 20px;
	flex-direction: column;
	@media ${(props) => props.theme.tablet} {
		flex-direction: row;
		justify-content: space-between;
		gap: 50px;
		min-height: 450px;
	}
	@media ${(props) => props.theme.desktop} {
		padding: 0 150px;
	}
`;
const ContainerInfo = styled(FlexBox)`
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;
	margin-bottom: 40px;
	@media ${(props) => props.theme.tablet} {
		width: 50%;
	}
`;
const Box = styled(FlexBox)`
	gap: 20px;
`;
const Icon = styled.div`
	background-color: #fff;
	padding: 18px;
	color: #0a0913;
	border-radius: 50%;
	svg {
		font-size: 16px;
	}
	@media ${(props) => props.theme.desktop} {
		padding: 24px;
		svg {
			font-size: 24px;
		}
	}
`;
const Text = styled.div`
	h3 {
		color: skyblue;
		margin-bottom: 5px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 1.4vw;
	}
`;
const ContactForm = styled.div`
	width: 100%;
	padding: 20px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	p {
		color: black;
		text-align: center;
		font-weight: 700;
		font-size: 24px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 50%;
	}
	@media ${(props) => props.theme.desktop} {
		height: 400px;
	}
`;

const InputBox = styled.div`
	position: relative;
	padding: 20px;
	input {
		width: 100%;
		border: none;
		outline: none;
		border-bottom: 2px solid black;
		padding: 10px 0;

		&:focus ~ span {
			color: red;
			font-size: 12px;
			transform: translateY(-20px);
		}
	}
	span {
		color: #666;
		position: absolute;
		font-size: 16px;
		left: 20px;
		margin: 10px 0;
		pointer-events: none;
		z-index: 10;
		padding: 5px 0;
		transition: 0.5s;
	}
`;
const Button = styled.button`
	cursor: pointer;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 8px;
	border: none;
	outline: none;
	padding: 10px 20px;
`;
function Contact() {
	return (
		<>
			<Container>
				<Content>
					<Title>Contact Us</Title>
					<Contents>
						안녕하세요 저에게 연락을 주시려면 밑에 내용을 확인하시고 연락
						부탁드립니다
					</Contents>
				</Content>
				<ContainerBox>
					<ContainerInfo>
						<Box>
							<Icon>
								<FaRegAddressCard />
							</Icon>
							<Text>
								<h3>Address</h3>
								<p>서울 서초구 방배동 드림하우스 401호</p>
							</Text>
						</Box>

						<Box>
							<Icon>
								<BsFillTelephoneFill />
							</Icon>
							<Text>
								<h3>Phone</h3>
								<p>010-5758-9884</p>
							</Text>
						</Box>

						<Box>
							<Icon>
								<MdOutlineMail />
							</Icon>
							<Text>
								<h3>Email</h3>
								<p>operland55@naver.com</p>
							</Text>
						</Box>
					</ContainerInfo>
					<ContactForm>
						<form>
							<p>Send Message</p>
							<InputBox>
								<input type="text" />
								<span>Name</span>
							</InputBox>
							<InputBox>
								<input type="Email" />
								<span>Email </span>
							</InputBox>
							<InputBox>
								<input type="text" />
								<span> Your Message </span>
							</InputBox>
						</form>

						<Button>Send</Button>
					</ContactForm>
				</ContainerBox>
			</Container>
		</>
	);
}

export default Contact;
