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
  "@media (max-width:800px)": {
    fontSize: "7vw",
  },
});

const Span = styled.span({
  fontWeight: 300,
});

function Title() {
  return (
    <H1>
      Word <Span>Analytics</Span>
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
    url("https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=100")`,
});

function HeaderBgImage() {
  return <HeaderBg>image</HeaderBg>;
}
