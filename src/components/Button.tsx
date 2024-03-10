import styled from "styled-components";

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isClicked: boolean;
};

const StyledButton = styled.button<StyledButtonProps>((props) => ({
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
  border: `2px solid ${props.isClicked ? "#4CAF50" : ""}`,
}));

type ButtonProp = {
  label: string;
  isClicked: boolean;
  handleClick: () => void;
  icon: React.ReactNode;
};

const IconSpan = styled.span({
  marginRight: "5px",
});

export default function Button({
  label,
  isClicked,
  handleClick,
  icon,
}: ButtonProp) {
  return (
    <StyledButton onClick={handleClick} isClicked={isClicked}>
      <IconSpan>{icon}</IconSpan>
      <span>{label}</span>
    </StyledButton>
  );
}
