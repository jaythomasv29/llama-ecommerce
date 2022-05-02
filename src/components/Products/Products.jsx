import React from 'react'

import { popularProductData } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import { Container } from './Products.styles'

function Products() {
  
  return (
    <>
      <h1 style={{margin: "35px", textAlign: "center", fontSize:"3rem"}}> Products:</h1>
      <Container>
        {
          popularProductData.map(product => (
            <ProductCard key={product.id}  product={product} />
          ))
        }
      </Container>
    </>
  )
}

export default Products