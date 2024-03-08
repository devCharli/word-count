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

export default function Textarea() {
  return (
    <StyledDiv>
      <StyledTextArea placeholder="Enter your text" spellCheck="false" />
    </StyledDiv>
  );
}
