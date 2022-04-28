import styled from "styled-components";

export const Container = styled.div`
  /* background-color: grey; */
  /* height: 60px; */
`;

export const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
	border-bottom: 1px solid lightgray;
`;

export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const CenterDiv = styled.div`
  flex: 1;
	text-align: center;
`;
export const RightDiv = styled.div`
  flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const LanguageDropDown = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const SearchInput = styled.input`
  border: none;
	outline: none;
`;

export const Logo = styled.h2`
  font-weight: bold;
	
`;

export const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-right: 25px;
`