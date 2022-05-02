import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  /* grid-auto-columns: 1fr;  */
  grid-template-columns: repeat(auto-fill, 375px) ;
  gap: 15px;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
