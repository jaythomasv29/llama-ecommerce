import React from 'react'

import { Container, Image, InfoContainer, Title, Button } from './CategoryItem.styles'

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.image}/>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  )
}

export default CategoryItem