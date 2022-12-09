import MovieSite from "./assets/movieScreen.jpg";
import TomorrowSite from "./assets/Tomorrow-Home-Desk.jpg";
import AboutMe from "./assets/AboutMe.jpg";

export const Projects = [
	{
		name: "About Me",
		img: `${AboutMe}`,
		skill: ["Html", "Css", "JavaScript"],
		period: "2022-12-01 ~ 2022-12-04",
		simpleIntroduce: "Html css JS(observer)로 만든 사이트입니다",
		introduce: "",
		github: "https://github.com/operland55/About-Me",
		liveDemo: "https://operland55.github.io/About-Me/",
		fun: "intersectionobserver로 이용한 화면 이미지에 맞게 대화박스가 보여진다",
	},

	{
		name: "SnowRainCloud",
		img: `${MovieSite}`,
		skill: ["sass", "react", "reactQuery", "recoil"],
		period: "2022-10-01 ~ 2022-11-01",
		simpleIntroduce:
			"인기있는영화 Tv 소개와 회원가입 기능과 로그인후 좋아하는 목록들을 한곳에 모았습니다",
		introduce:
			"처음으로 혼자 모든걸 만든 사이트입니다. 아무래도 넷플릭스 사이트를 많은분들이 포트폴리어로 올리다보니 한번 저만의 영화 소개 사이트를 만들고싶어서 사이트를 구경하면서 마음에 든 디자인을보고 기억해 두었다가 만들었습니다. 힘들었 던 점은 아무래도 레이아웃 짜는것과 라이브러리로 비록 구현하였지만 박스안에 여러가지 영화들을 자동으로 슬라이드 시키는게 힘들었습니다",
		github: "https://github.com/operland55/PortFolio-WebSite",
		liveDemo: "https://relaxed-crumble-8ec459.netlify.app/",
		fun: "react-query를 이용한 데이터 fetch, 검색기능 구현, recoil를 이용해서 회원가입 기능을 만들었습니다",
	},

	{
		name: "Tomorrow-HomePage",
		img: `${TomorrowSite}`,
		skill: ["html", "sass", "JavaScript"],
		period: "2022-07-01 ~ 2022-08-01 (1人 개인 프로젝트)",
		simpleIntroduce: "html scss javaScript 로 만든 반응형 사이트입니다",
		introduce:
			"이 사이트같은경우는 처음부터 끝까지 클론코딩으로 만든 사이트입니다.  가장 재밌고 부족한 점들을 보완을 많이 했습니다. 우선 레이아웃 짜는것과 그리고 퍼스트반응형 Sass입니다 저는 Sass를 배우기전에 style-component로만 화면을 구현하였는데 sass를 배우고나서는 sass만 사용했던것같습니다 ",
		github: "https://github.com/operland55/Tomorrow-Home",
		liveDemo: "https://bucolic-puppy-4b4fce.netlify.app/",
		fun: "라이브러리로 Slide 구현 nav 선택시 section에 맞춰서 이미지 이동",
	},
	{
		name: "NetFlex",
		img: `${MovieSite}`,
		skill: ["react", "reactQuery", "typeScript"],
		period: "2022-05-01 ~ 2022-05-16 (1人 개인 프로젝트)",
		simpleIntroduce: "React로 처음 만들어본 NetFlex 사이트입니다",
		introduce:
			"노마드 코더의 강의를듣고 기본틀만 잡아주고 나머지는 혼자서 만든 홈페이지입니다. 아쉬웠던 점은 반응형 페이지를 제대로 못만들고 영하와 Tv Detail 중심만 만들었습니다.	재미있었던 부분은 원하는 데이터들의 api를 하나하나 들고와 정보를 얻어서 꾸밀수 있었 던 점이 재미있었습니다",
		github: "https://github.com/operland55/NetFlix-Site",
		liveDemo: "https://beautiful-custard-737306.netlify.app/",
		fun: "react-query를 이용한 데이터 fetch framer-motion을 이용한 슬라이드, 모달창 등",
	},
];
