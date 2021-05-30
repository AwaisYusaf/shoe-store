import { Card, CardMedia} from '@material-ui/core';
import styled from 'styled-components';
import React, { useContext } from 'react'
import {MyContext} from './GlobalContext/GlobalContext';
import Shoes from '../dataStore/Shoes.json';
const CartItem = ({item}) =>{
    const shoe = Shoes[item.slug];
    console.log(shoe);
    return (
        <Item>
            <Image src={shoe.image}/>
            <Details>
                <h4>{shoe.name}</h4>
                <p>Quantity: {item.quantity}</p>
            </Details>
        </Item>
    )
}
const Details = styled.div`
    
margin-left:5px;

`
const Item = styled.div`
    display:flex;
    margin:5px 0;
    &:hover{
        border:1px gray solid;
    }
`
const Image = styled.img`
    width:150px;
    height:140px;
`
function Cart() {
    const {state} = useContext(MyContext);
    console.log(state);
    const shoes = state;
    return (
        <div>
        {
            state.map((value,index)=>{
                return <CartItem item={value} key={index}/>
            })
        }
        </div>
    )
}

export default Cart;
