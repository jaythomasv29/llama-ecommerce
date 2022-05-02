import React from 'react'

import Announcements from '../../components/Announcements/Announcements'
import { Container, FilterContainer, Title, Filter, FilterText, Option, Select } from './ProductList.styles'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'


function ProductList() {
    return (
        <Container>
            <Announcements />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue={'DEFAULT'}>
                        <Option disabled value='DEFAULT'>New Releases</Option>
                        <Option value="low-high">Price (Low to High)</Option>
                        <Option value="high-low">Price (High to Low)</Option>
                        <Option value="men">Men</Option>
                        <Option value="women">Women</Option>
                    </Select>
                    <Select defaultValue={'DEFAULT'}>

                        <Option value="DEFAULT" disabled>Brand</Option>
                        <Option value="nike">Nike</Option>
                        <Option value="yeezy">Yeezy</Option>
                        <Option value="adidas">Adidas</Option>

                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Items</FilterText>
                    <Select defaultValue={'DEFAULT'}>
                        <Option value='Default' disabled>Color</Option>
                        <Option value="white">White</Option>
                        <Option value="black">Black</Option>
                        <Option value="red">Red</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="pink">Pink</Option>
                        <Option value="grey">Grey</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList