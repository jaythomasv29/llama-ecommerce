import styled from "styled-components";
export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
opacity: 0;
`;
export const Container = styled.div`
height: 350px;
  position: relative;
  cursor: pointer;
  &:hover ${InfoContainer} {
    opacity: 1;
    transition: 1s;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90%;
`;


export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  color: white;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 50%;
  background-color: rgba(25, 25, 25, 0.5);
  z-index: 1;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;

export const Circle = styled.div``;
