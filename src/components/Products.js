import { Grid } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import {Outlet, Route, Router, Routes, useParams,Link} from 'react-router-dom';
import shoes from '../dataStore/Shoes.json';
import ProductDetails from './ProductDetails';
function Products() {
    return (
        <>
        <Title><h1>Nike Shoes Collection</h1></Title>
        <Grid container direction="row" justify="center">
            <Grid item xs={0} sm={0} md={1} lg={2}/>
            <Grid item container spacing={2} xs={12} sm={12} md={10} lg={8} justify="center" alignItems="center">
                {Object.entries(shoes).map(([slug,{name,image,price}])=>{
                    return (
                            <Product details= {{slug,name,image,price}}/>
                    );
                })}
            </Grid>
            <Grid item xs={0} sm={0} md={1} lg={2}/>
        </Grid>
        </>
    )
}
const Title = styled.div`
text-align:center;

`

export default Products;
