import styled from "styled-components";
import Textarea from "./Textarea";
import { useEffect, useState } from "react";
import Stats from "./Stats";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import { ClipboardCopyIcon, ResetIcon } from "@radix-ui/react-icons";

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
    margin: "0 auto",
    marginTop: "40px",
    flexDirection: "column",
  },
});

export default function Container() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const countWords = (text: string) => {
    const words = text.match(/[\uAC00-\uD7A3a-zA-Z]+/g);
    return words ? words.length : 0;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  }, [isCopied]);

  useEffect(() => {
    setTimeout(() => {
      setIsReset(false);
    }, 500);
  }, [isReset]);

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    }
    return;
  };

  const resetText = () => {
    if (text) {
      setText("");
      setIsReset(true);
    }
    return;
  };

  const stats = {
    textCountWithSpace: text.length,
    textCountWithoutSpace: text.replace(/\s+/g, "").length,
    wordCount: countWords(text),
    sentenceCount: text.split(/[.?!]+/).filter(Boolean).length,
  };

  return (
    <>
      <StyledMain>
        <Textarea text={text} setText={setText} />
        <Stats {...stats} />
      </StyledMain>
      <ButtonContainer>
        <Button
          label="복사하기"
          isClicked={isCopied}
          handleClick={copyToClipboard}
          icon={<ClipboardCopyIcon />}
        />
        <Button
          label="초기화"
          isClicked={isReset}
          handleClick={resetText}
          icon={<ResetIcon />}
        />
      </ButtonContainer>
    </>
  );
}
