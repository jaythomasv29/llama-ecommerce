import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    height: 100%;
    object-fit: cover;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
`

export const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    `

export const Title = styled.h1`
margin-bottom: 20px;
color: white;
`

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 600;
`