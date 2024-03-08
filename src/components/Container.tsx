import styled from "styled-components";
import Textarea from "./Textarea";
import { useState } from "react";
import Stats from "./Stats";

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
  "@media (max-width:1150px)": {
    width: "85vw",
    flexDirection: "column",
  },
});

export default function Container() {
  const [text, setText] = useState("");

  function countWords(text: string) {
    const words = text.match(/[\uAC00-\uD7A3a-zA-Z]+/g);
    return words ? words.length : 0;
  }

  const stats = {
    textCountWithSpace: text.length,
    textCountWithoutSpace: text.replace(/\s+/g, "").length,
    wordCount: countWords(text),
    sentenceCount: text.split(/[.?!]+/).filter(Boolean).length,
  };

  return (
    <StyledMain>
      <Textarea text={text} setText={setText} />
      <Stats {...stats} />
    </StyledMain>
  );
}
