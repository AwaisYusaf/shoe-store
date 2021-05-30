import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { MyContext } from './GlobalContext/GlobalContext';
function Header() {
    const {state} = useContext(MyContext);
    let quantity = 0;
    for(let i=0;i<state.length;i++){
       quantity+= state[i].quantity;
    }
    return (
        <Container>
            <Logo src="/images/logo3.png"/>
            <Menu >
                <HeaderLink className="header-link" to="/">Home</HeaderLink>
                <HeaderLink className="header-link" to="products">Products</HeaderLink>
                <HeaderLink className="header-link" to="about">About</HeaderLink>
                <Cart>
                    <Link to='/cart'>
                        <ShoppingCartIcon/>
                        <p>{quantity}</p>
                    </Link>
                </Cart>
            </Menu>
        </Container>
    );
}
const HeaderLink = styled(Link)`
    height:100%;
    padding:20px 30px;
    color:black;
    &:hover{
        transition:0.3s ease-out;
        color:white;
        background:black;
    }

`

const Cart = styled.div`
    padding : 0 30px;
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    p{
        background:black;
        color:white;
        border-radius:20px;
        padding:3px 7px;
        font-size:14px;
        font-weight:600;
        font-family:Courier New;
    }
    a{
        text-decoration:none;
        color:black;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex:1;
    a{
        text-decoration:none;
        font-family:Verdana
    }
`
const Logo = styled.img`
    width:70px;
`
const Container = styled.div`
    display:flex;
    min-height:60px;
    position:fixed;
    align-items:center;
    justify-content:space-around;
    padding:0 10px;
    width:100vw;
`

export default Header
