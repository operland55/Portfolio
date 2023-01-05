import MovieSite from "./assets/movieScreen.jpg";
import TomorrowSite from "./assets/Tomorrow-Home-Desk.jpg";
import AboutMe from "./assets/AboutMe.jpg";
import NetFlix from "./assets/NetFlix.jpg";
import Recipe from "./assets/recipe.jpg";

export const Projects = [
	{
		name: "RecipeCook",
		img: `${Recipe}`,
		skill: ["sass", "react", "recoil"],
		period: "2022-12-20 ~ 2023-01-03",
		simpleIntroduce:
			"음식 소개와 검색하면 음식에 대한 정보 요리방법이 나옵니다",
		introduce:
			"요리에 대한 궁금한 것을 검색하고 사진을클릭하면 요리 만드는 법이 나오게 설정하였습니다. 메뉴와 갤러리 메뉴를 선택하면 그거에 맞게 메뉴들이 화면에 나오게 하였습니다",
		github: "https://github.com/operland55/Delicious-Recipes",
		liveDemo: "https://jocular-concha-3b2ca9.netlify.app/",
		fun: "Scroll 이벤트, Recipe Search기능, Menu Gallery Filter기능 ",
	},
	{
		name: "SnowRainCloud",
		img: `${MovieSite}`,
		skill: ["sass", "react", "reactQuery", "recoil"],
		period: "2022-10-01 ~ 2022-11-01",
		simpleIntroduce:
			"인기있는영화 Tv 소개와 회원가입 기능과 로그인후 좋아하는 목록들을 한곳에 모았습니다",
		introduce:
			"처음으로 혼자 계획하고 만든 사이트입니다. 아무래도 넷플릭스 사이트를 많은분들이 포트폴리어로 올리다보니 한번 저만의 영화 소개 사이트를 만들고싶어서 사이트를 구경하면서 마음에 든 디자인을보고 기억해 두었다가 만들었습니다. 힘들었 던 점은 아무래도 레이아웃 짜는것과 라이브러리로 비록 구현하였지만 박스안에 여러가지 영화들을 자동으로 슬라이드 시키는게 힘들었습니다",
		github: "https://github.com/operland55/PortFolio-WebSite/tree/main",
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
			"아직 html css 가 많이부족하다는 생각에 다시 처음부터 공부하고 추가로 sass도 배우고 만들어 본 사이트입니다. ",
		github: "https://github.com/operland55/Tomorrow-Home",
		liveDemo: "https://bucolic-puppy-4b4fce.netlify.app/",
		fun: "라이브러리로 Slide 구현 nav 선택시 section에 맞춰서 이미지 이동",
	},
	{
		name: "NetFlex",
		img: `${NetFlix}`,
		skill: ["react", "reactQuery", "typeScript"],
		period: "2022-05-01 ~ 2022-05-16 (1人 개인 프로젝트)",
		simpleIntroduce: "React로 처음 만들어본 NetFlex 사이트입니다",
		introduce:
			"The Movie Database API를 호출하여 화면에 데이터를 시각적으로 구현했습니다.			Framer-motion 라이브러리를 사용하여 슬라이더와 모달창 애니메이션을 만들었습니다.	모바일 해상도 한정 슬라이더를 터치해서 드래그하는 기능 추가영화, 시리즈 검색 기능 구현",
		github: "https://github.com/operland55/NetFlix-Site",
		liveDemo: "https://beautiful-custard-737306.netlify.app/",
		fun: "react-query를 이용한 데이터 fetch framer-motion을 이용한 슬라이드, 모달창 등",
	},
	{
		name: "About Me",
		img: `${AboutMe}`,
		skill: ["Html", "Css", "JavaScript"],
		period: "2022-12-01 ~ 2022-12-04",
		simpleIntroduce: "Html css JS(observer)로 만든 사이트입니다",
		introduce:
			"intersectionobserver을 공부하다가 한번 간단하게 나를 소개한 만화를 만들면 좋겠다 싶어서 만든 사이트입니다. ",
		github: "https://github.com/operland55/About-Me",
		liveDemo: "https://operland55.github.io/About-Me/",
		fun: "intersectionobserver로 이용한 화면 이미지에 맞게 대화박스가 보여진다",
	},
];
