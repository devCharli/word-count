import styled from "styled-components";

const StyledDiv = styled.div({
  resize: "none",
  flex: "2",
  font: "inherit",
  padding: "30px 40px",
  fontSize: "22px",
  "::placeholder": {
    fontWeight: "500",
    color: "#959c9f",
  },
});

const StyledTextArea = styled.textarea({
  height: "100%",
  width: "100%",
});

type TextAreaProp = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Textarea({ text, setText }: TextAreaProp) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
  };
  return (
    <StyledDiv>
      <StyledTextArea
        value={text}
        onChange={handleChange}
        placeholder="내용을 입력해주세요."
        spellCheck="false"
      />
    </StyledDiv>
  );
}
