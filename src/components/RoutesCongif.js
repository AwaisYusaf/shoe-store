import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import About from './About';
import Cart from './Cart';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Products from './Products';
function RoutesCongif() {
    return (
        <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/products/:slug' element={<ProductDetails/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
        </div>
    )
}

export default RoutesCongif;
