import styled from "styled-components";
import Textarea from "./Textarea";
import { useState } from "react";

const StyledMain = styled.main({
  width: "1050px",
  height: "520px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
  marginTop: "55px",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  "@media (max-width:800px)": {
    width: "85vw",
    flexDirection: "column",
  },
});

export default function Container() {
  const [text, setText] = useState("");
  return (
    <StyledMain>
      <Textarea text={text} setText={setText} />
    </StyledMain>
  );
}
