import React from 'react'
import { CenterDiv, Container, LanguageDropDown, LeftDiv, Logo, MenuItem, RightDiv, SearchContainer, SearchInput, Wrapper } from './Navbar.styles'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

function Navbar() {
	return (
		<Container>
			<Wrapper>
				<LeftDiv>
					<LanguageDropDown>
						EN
					</LanguageDropDown>
					<SearchContainer style={{color: "gray", fontSize: "16px"}}>
						<SearchInput />
						<SearchIcon />
					</SearchContainer>
				</LeftDiv>
				<CenterDiv>
					<Logo>ESSENTIALS.</Logo>
				</CenterDiv>
				<RightDiv>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Badge badgeContent={1} color="primary" style={{cursor: "pointer"}}>
						<ShoppingCartOutlined color="action" />
					</Badge>

				</RightDiv>
			</Wrapper>
		</Container>
	)
}



export default Navbar