import React from 'react'
import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Container, Image, InfoContainer, Icon } from './ProductCard.styles'
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
    let navigate = useNavigate()
    return (
        <Container onClick={() => navigate(`/products/${product.id}`)}>

            <Image src={product.image} />
            <InfoContainer>

                <Icon>
                    <ShoppingCartOutlined />

                </Icon>
                <Icon>

                    <FavoriteBorderOutlinedIcon />
                </Icon>
                <Icon>

                    <SearchIcon />
                </Icon>

            </InfoContainer>
        </Container>
    )
}

export default ProductCard