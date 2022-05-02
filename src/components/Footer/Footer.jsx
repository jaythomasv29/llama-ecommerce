import React from 'react'
import { Container, Logo, Left, Center, Right, Description, SocialContainer, SocialIconContainer, Title, List, ListItem, ContactItem, PaymentTypes } from './Footer.styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import creditCardImage from '../../assets/major-credit-cards-removebg-preview.png'

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>ESSENTIALS.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam dolore voluptates cupiditate nesciunt reiciendis aut a assumenda, eligendi fugiat harum dolores nisi temporibus officia earum fugit, vitae, accusamus praesentium.
            </Description>
            <SocialContainer>
                <SocialIconContainer color="3B5999">
                    <FacebookIcon/>
                </SocialIconContainer>
                <SocialIconContainer color="E4405F">
                    <InstagramIcon/>
                </SocialIconContainer>
                <SocialIconContainer color="55ACEE">
                    <TwitterIcon/>
                </SocialIconContainer>
                <SocialIconContainer color="E60023">
                    <PinterestIcon/>
                </SocialIconContainer>
               
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Womens Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Returns</ListItem>
                <ListItem>Terms</ListItem>
                
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <MapIcon style={{marginRight: "10px"}}/> 622 Westvester Blvd, Austin TX 98423
            </ContactItem>
            <ContactItem >
               <LocalPhoneOutlinedIcon style={{marginRight: "10px"}}/> +1 234 567 8910
            </ContactItem>
            <ContactItem>
                <EmailOutlinedIcon style={{marginRight: "10px"}}/> contact@essentialkicks.com
            </ContactItem>
            <PaymentTypes src={creditCardImage} alt="payment-types" />
        </Right>

    </Container>
  )
}

export default Footer