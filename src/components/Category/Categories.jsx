import React from 'react'
import {categoryData} from '../../data'

import { Container } from '../Category/Category.styles'
import CategoryItem from '../CategoryItem/CategoryItem'
function Categories() {
  return (
   <Container>
     {
       categoryData.map(category => (
         <CategoryItem key={category.id} item={category} />
       ))
     }
   </Container>
  )
}

export default Categories