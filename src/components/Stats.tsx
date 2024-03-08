import styled from "styled-components";

const StyledStats = styled.section({
  flex: "1.3",
  backgroundColor: "#f1f6f8",
  display: "flex",
  flexWrap: "wrap",
});

const StyledStat = styled.section({
  flex: "1 150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .stat:nth-child(1), & .stat:nth-child(2)": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  },
  "& .stat:nth-child(2), & .stat:nth-child(4)": {
    borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
  },
  "@media (max-width:1150px)": {
    padding: "15px 10px",
    "& .stat:nth-child(1), & .stat:nth-child(2), & .stat:nth-child(4)": {
      border: "none",
    },
  },
});

const Span = styled.span({
  color: "#4d5457",
  fontWeight: "600",
  fontSize: "35px",
  marginBottom: "10px",
});

const H2 = styled.h2({
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: "500",
  color: "#747a7c",
});

type StatsProp = {
  textCountWithSpace: number;
  textCountWithoutSpace: number;
  wordCount: number;
  sentenceCount: number;
};

export default function Stats({
  textCountWithSpace,
  textCountWithoutSpace,
  wordCount,
  sentenceCount,
}: StatsProp) {
  return (
    <StyledStats>
      <Stat count={textCountWithSpace} label="공백제외" />
      <Stat count={textCountWithoutSpace} label="공백포함" />
      <Stat count={wordCount} label="단어 수" />
      <Stat count={sentenceCount} label="문장 수" />
    </StyledStats>
  );
}

type StatProp = {
  count: number;
  label: string;
};

function Stat({ count, label }: StatProp) {
  return (
    <StyledStat>
      <Span>{count}</Span>
      <H2>{label}</H2>
    </StyledStat>
  );
}
