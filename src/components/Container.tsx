import styled from "styled-components";
import Textarea from "./Textarea";
import { useState } from "react";
import Stats from "./Stats";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import { ClipboardCopyIcon, ResetIcon } from "@radix-ui/react-icons";
import Toast from "./Toast";

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

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<"copied" | "reset">(
    "copied"
  );

  const countWords = (text: string) => {
    const words = text.match(/[\uAC00-\uD7A3a-zA-Z]+/g);
    return words ? words.length : 0;
  };

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setToastMessage("copied");
      setShowToast(true);
    }
    return;
  };

  const resetText = () => {
    if (text) {
      setText("");
      setToastMessage("reset");
      setShowToast(true);
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
      <Toast
        isOpen={showToast}
        onCloseToast={setShowToast}
        message={toastMessage}
      />

      <StyledMain>
        <Textarea text={text} setText={setText} />
        <Stats {...stats} />
      </StyledMain>
      <ButtonContainer>
        <Button
          label="복사하기"
          handleClick={copyToClipboard}
          icon={<ClipboardCopyIcon />}
        />
        <Button label="초기화" handleClick={resetText} icon={<ResetIcon />} />
      </ButtonContainer>
    </>
  );
}
