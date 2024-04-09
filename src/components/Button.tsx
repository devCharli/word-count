import styled from "styled-components";

const StyledButton = styled.button({
  display: "flex",
  alignItems: "center",
  margin: "10px",
  padding: "15px 40px",
  borderRadius: "10px",
  backgroundColor: "#f1f6f8",
  color: "#747a7c",
  fontSize: "18px",
  letterSpacing: "2px",
  fontWeight: "500",
  cursor: "pointer",
});

type ButtonProp = {
  label: string;
  handleClick: () => void;
  icon: React.ReactNode;
};

const IconSpan = styled.span({
  marginRight: "5px",
});

export default function Button({ label, handleClick, icon }: ButtonProp) {
  return (
    <StyledButton onClick={handleClick}>
      <IconSpan>{icon}</IconSpan>
      <span>{label}</span>
    </StyledButton>
  );
}
