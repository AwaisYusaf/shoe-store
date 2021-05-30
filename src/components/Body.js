import React from 'react'
import shoes from '../dataStore/Shoes.json';
import styled from 'styled-components';
import Home from './Home';
import Products from './Products';
import About from './About';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import RoutesCongif from './RoutesCongif';

function Body() {

    return (
        <Container>
            <RoutesCongif/>
        </Container>
    )
}
const Container = styled.div`
    padding-top:70px;
`




export default Body
