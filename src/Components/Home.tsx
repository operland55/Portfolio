import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
const Wrapper = styled.div`
	width: 100vw;
	/* padding-top: 114px; */
`;
function Home() {
	return (
		<Wrapper>
			<Header />
			<div>
				<Main />
			</div>
		</Wrapper>
	);
}

export default Home;
