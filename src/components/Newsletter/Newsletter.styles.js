import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: black;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  background-color: white;
  
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 29px;
  padding-left: 20px;
  color: gray;
  outline: none;
`;
export const NewsletterButton = styled.button`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  background-color: teal;
  cursor: pointer;
`;
