import React from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Shoes from '../dataStore/Shoes.json';
function ProductDetails() {
    const {slug} = useParams();
    const shoe = Shoes[slug];
    if(!shoe){
        return <h1>Item Not Found!</h1>
    }
    return (
        <Container>
            <Details>
                <ProductImage src={shoe.image}/>
                <h3>{shoe.name}</h3>
            </Details>
            <Actions>
                <p>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown
                    inter took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only
                     five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. 
                     It was popularised in the 1960s with the release 
                     of Letraset sheets containing Lorem Ipsum passages,
                     nd more recently with desktop publishing software 
                     like Aldus PageMaker including versions of Lorem 
                     Ipsum.
                </p>
                <h3>Price: ${shoe.price}</h3>
                <ButtonGroup>
                    <AddButton>Add to Cart</AddButton>
                    <p>Want to review another item? Back to <Link to='/products'>products page</Link></p>
                </ButtonGroup>
            </Actions>
        </Container>
    )
}
const Container = styled.div`
    margin-top:50px;
   display:flex;
   justify-content:space-around;
   @media (max-width:1090px){
       flex-direction:column;
       justify-content:center;
       align-items:center;
   }
`
const Details = styled.div`
    padding:30px 20px;
    background-color: rgb(219, 222, 223);
    @media (max-width:1090px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin : 10px 5px;
        width:60%;
    }
    @media (max-width:790px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin : 10px 5px;
        width:100%;
    }
`
const ProductImage = styled.img`
    width:600px;
    transition: transform 1s;
    &:hover{
        transform:translateY(10px);
    }
`
const Actions = styled.div`
    width:40%;
`

const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AddButton = styled.button`
    padding: 10px 12px;
    border-radius:100px;
    border:none;
    text-transform:uppercase;
    background-color:black;
    color:white;
    font-weight:600;
    &:hover{
        background-color:white;
        color:black;
        border:2px black solid;
    }
` 

export default ProductDetails;
