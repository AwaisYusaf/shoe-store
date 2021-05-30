import { Grid,Card, CardMedia, CardContent, CardActions ,makeStyles} from '@material-ui/core';
import React,{useState,useContext} from 'react'
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import { MyContext } from './GlobalContext/GlobalContext';
const useStyle = makeStyles({
    card:{
        margin:'10px 0'
    }
});
function Product({details}) {
    const {slug,name,image,price} = details;
    const path = useParams();
    const [isRaised,setRaised] = useState(false);
    const {dispatch} = useContext(MyContext);
    function addToCart(){
        dispatch({type:'ADD',payload:slug});
    }
    return (
        <>
        <Grid item xs={6} sm={6} md={4} lg={3}>
           <Card 
           className={useStyle().card} 
           raised={isRaised}
           onMouseEnter={()=>setRaised(true)}
           onMouseLeave={()=>setRaised(false)}>
               <CardMedia>
                    <ProductImage src={image}/>
               </CardMedia>
               <CardContent>
                    <p>{name}</p>
                    <h5>Price: ${price}</h5>
               </CardContent>
               <ActionButtons>
                    <button style={{cursor:'pointer'}} onClick={()=>addToCart()}>ADD TO CART</button>
                    <Link to={'/products/'+slug}>PRODUCT DETAILS</Link>
               </ActionButtons>
           </Card>
            {/* <CustomProduct>
                <ProductImage src={image}/>
                <Details>
                    <p>{name}</p>
                    <h5>${price}</h5>
                </Details>
                <ActionButtons>
                    <button>ADD TO CART</button>
                    <Link to={'/products/'+slug}>PRODUCT DETAILS</Link>
                </ActionButtons>
            </CustomProduct> */}
        </Grid>
        </>
    )
}
const ActionButtons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 15px;
    margin-top:-15px;
    a{
        text-decoration:none;
        border-radius:100px;
        color:white;
        background:black;
        padding: 9px 15px;
    }
    a:hover{
        background:white;
        color:black;
        border:2px solid black;
        
    }
    button{
        padding: 10px 15px;
        border-radius:100px;
        background:black;
        color:white;
        margin:5px 2px;
    }
    button:hover{
        background:white;
        color:black;
        border:2px solid black;
    }
    @media (max-width:790px){
        flex-direction:column;        
    }
`
const Details = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    
`
const CustomProduct = styled.div`
&:hover{
    border:1px black solid;
}
    padding:10px 2px;

`
const ProductImage = styled.img`
    width:100%;
    position:relative;
    transition:transform 1s;
    &:hover{
        transform:translateY(-5px);
    }
`

export default Product;