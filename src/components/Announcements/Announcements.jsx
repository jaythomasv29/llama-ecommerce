import styled from 'styled-components'

function Announcements() {
    return (
        <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    )

}

const Container = styled.div`
    padding-top: 5px;
    margin-bottom: 15px;
    background-color: teal;
    height: 30px;
    color: white;
    text-align: center;
`

export default Announcements