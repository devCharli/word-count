import styled from "styled-components";

const StyledFooter = styled.footer({
  width: "1050px",
  margin: "15px 0",
  display: "flex",
  justifyContent: "space-between",
  opacity: "0.4",
  "@media (max-width:1150px)": {
    width: "initial",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function Footer() {
  return (
    <StyledFooter>
      <small>&copy; Copyright by Charli. All rights reserved.</small>
    </StyledFooter>
  );
}
