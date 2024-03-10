import styled from "styled-components";

type ButtonsProp = {
  children: React.ReactNode;
};

const StyledButtons = styled.section({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
});

export default function ButtonContainer({ children }: ButtonsProp) {
  return <StyledButtons>{children}</StyledButtons>;
}
