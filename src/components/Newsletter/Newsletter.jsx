import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React from 'react'
import { Container, Input, InputContainer, Description, Title, NewsletterButton  } from './Newsletter.styles'

function Newsletter() {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>Get timely updates on the latest products and the newest drops!</Description>
        <InputContainer>
            <Input placeholder="Your email" />
            <NewsletterButton>
                <SendOutlinedIcon />
            </NewsletterButton>
        </InputContainer>
    </Container>
  )
}

export default Newsletter