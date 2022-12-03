import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
const Wrapper = styled.div`
	width: 100vw;
`;
function Home() {
	return (
		<Wrapper>
			<div>
				<Main />
			</div>
		</Wrapper>
	);
}

export default Home;
