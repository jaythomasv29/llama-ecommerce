import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Description } from './Product.styles';
import {
    Image, ImgContainer, DetailsContainer, Title, Price, ProductCard, AddContainer,
    AmountContainer,
    Amount,
    AddButton,
    CartFields,
    FilterContainer
} from './Product.styles';
import { popularProductData } from '../../data'
import Announcements from '../../components/Announcements/Announcements';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Filter, FilterText, Option, Select } from '../ProductList/ProductList.styles';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Product() {
    const findProduct = (id) => {
        return popularProductData.find(item => item.id === Number(id))
    }
    const params = useParams()
    const productData = findProduct(params.productId)

    return (
        <Container>
            <Announcements />
            <ProductCard>
                <ImgContainer>
                    <Image src={productData.image} alt="product display" />
                </ImgContainer>
                <DetailsContainer>
                    <Title>Shoe ARK Runners v1</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum nisi ipsa quo ut harum, libero cumque dicta provident beatae corrupti in incidunt totam architecto, eius nobis! Minus, accusantium illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere voluptas laborum perferendis distinctio eveniet tenetur numquam ut eius ipsa adipisci dicta dolor optio, laudantium cupiditate in, magnam ratione. Commodi, maxime.</Description>
                    <Price>$200</Price>
                    <FilterContainer >
                        <Filter style={{ padding: '0px' }}>
                            <span style={{ marginRight: "5px" }}>Size:</span>
                            <Select defaultValue={'DEFAULT'}>
                                <Option value='Default' disabled>Size</Option>
                                <Option value="white">5</Option>
                                <Option value="black">5.5</Option>
                                <Option value="red">6</Option>
                                <Option value="blue">6.5</Option>
                                <Option value="pink">7</Option>
                                <Option value="grey">7.5</Option>
                                <Option value="pink">8</Option>
                                <Option value="grey">8.5</Option>
                                <Option value="pink">9</Option>
                                <Option value="grey">9.5</Option>
                                <Option value="pink">10</Option>
                                <Option value="grey">10.5</Option>
                                <Option value="pink">11</Option>
                                <Option value="grey">11.5</Option>
                                <Option value="pink">12</Option>
                                <Option value="grey">12.5</Option>
                                <Option value="pink">13</Option>
                            </Select>
                        </Filter>
                    <AmountContainer>
                        <RemoveOutlinedIcon />
                        <Amount>1</Amount>
                        <AddOutlinedIcon />
                    </AmountContainer>
                    </FilterContainer>
                        <CartFields>
                        <AddButton>ADD TO CART</AddButton>              
                        </CartFields>
                    
                </DetailsContainer>
            </ProductCard>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product