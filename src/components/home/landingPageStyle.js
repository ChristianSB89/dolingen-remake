import styled from "styled-components";

export const MainGrid = styled.section`
  border: 1px blue solid;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const NewsGrid = styled.section`
  border: 1px green solid;
  gap: 0.5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ArticleStyle = styled.article`
  border: red 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
