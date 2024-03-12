import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <HeaderBgImage />
      <Title />
    </header>
  );
}

const H1 = styled.h1({
  fontSize: "65px",
  letterSpacing: "5px",
  textTransform: "uppercase",
  color: "#ffffffeb",
  marginTop: "75px",
  textAlign: "center",
  "@media (max-width:1150px)": {
    fontSize: "7vw",
  },
});

const Span = styled.span({
  fontWeight: 300,
});

function Title() {
  return (
    <H1>
      글자 수 <Span>세기</Span>
    </H1>
  );
}

const HeaderBg = styled.div({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-1",
  height: "254px",
  width: "100%",
  backgroundImage: `linear-gradient(
      to right,
      rgba(101, 0, 163, 0.9),
      rgba(24, 120, 175, 0.9)
    ),
    url("https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B0%9D%EC%9D%80-%ED%8C%8C%EB%9E%80%EC%83%89%EC%97%90%EC%84%9C-%EC%A7%84%ED%95%9C-%ED%8C%8C%EB%9E%80%EC%83%89-%EA%B7%B8%EB%9D%BC%EB%8D%B0%EC%9D%B4%EC%85%98-pJadQetzTkI")`,
});

function HeaderBgImage() {
  return <HeaderBg />;
}
