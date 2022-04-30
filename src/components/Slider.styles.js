import styled from "styled-components";

export const SliderContainer = styled.section`
  position: relative;
  height: 980px;
  display: flex;
  justify-content: center;
  
`;

export const Content = styled.div`
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  transform: translate(-50%, -50%);
  /* left: 0; */
  /* right: 0; */
  margin-left: auto;
  margin-right: auto;
  
  padding: 60px 150px;
  color: white;
  z-index: 1;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid white;
`;

export const ShopButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: gray;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  font-size: 3rem;
  color: lightgray;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;

  justify-content: center;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  font-size: 3rem;
  color: lightgray;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  border-color: whitesmoke;
  justify-content: center;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;
