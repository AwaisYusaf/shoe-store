import { Card, CardMedia} from '@material-ui/core';
import styled from 'styled-components';
import React, { useContext } from 'react'
import {MyContext} from './GlobalContext/GlobalContext';
import Shoes from '../dataStore/Shoes.json';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

// const CartItem = ({item}) =>{
//     const shoe = Shoes[item.slug];
//     console.log(shoe);
//     function checkOut(){
//         makeToast();
//         removeItem(item.slug);
//     }
//     return (
//         <Item>
//             <Product>
//                 <Image src={shoe.image}/>
//                 <Details>
//                     <h4>{shoe.name}</h4>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Total Bill: <b>${shoe.price*item.quantity}</b></p>
//                 </Details>
//             </Product>
//             <CheckOut>
//                 <button onClick={()=>checkOut()}>Check Out</button>
//             </CheckOut>
//         </Item>
//     )
// }



function Cart() {
    toast.configure();
    const {state,dispatch} = useContext(MyContext);
    console.log(state);
    const shoes = state;

    async function checkOut (value){
        const shoe = Shoes[value.slug];
        let message = "Checking Out, "+value.quantity+" "+shoe.name+".";
        await toast.success('🦄 '+message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        removeItem(value)
    }
    const removeItem=(item)=>{
        dispatch({type:'REMOVE',payload:item.slug});
    }

    return (
        <Container>
            <ToastContainer/>
            <h2>{state.length===0?"Shopping Cart is Empty":"Shopping Cart"}</h2>
        {
            state.map((value,index)=>{
                const shoe = Shoes[value.slug];
                return (
                    <Item>
                        <Product>
                            <Image src={shoe.image}/>
                            <Details>
                                <h4>{shoe.name}</h4>
                                <p>Quantity: {value.quantity}</p>
                                <p>Total Bill: <b>${shoe.price*value.quantity}</b></p>
                            </Details>
                        </Product>
                        <CheckOut>
                            <button onClick={()=>checkOut(value)}>Check Out</button>
                        </CheckOut>
                    </Item>
                )
            })
        }
        </Container>
    )
}
export default Cart;


const Container = styled.div`
h2{
    text-align:center;
}

`
const Product = styled.div`
    display:flex;

`


const CheckOut = styled.div`
button{
    border:none;
    padding:10px 15px;
    border-radius:100px;
    background-color:black;
    color:white;
    text-transform:uppercase;
    cursor:pointer;
}
button:hover{
    background-color:white;
    color:black;
    border:1px black solid;
    transition:0.2s;
}

`
const Details = styled.div`
    
margin-left:5px;

`
const Item = styled.div`
    display:flex;
    justify-content:space-between;
    margin:5px 0;
    align-items:center;
    opacity:0.5;
    &:hover{
        opacity:1;
        background-color: #f1f1f1;
        transition:0.5s;
    }
`
const Image = styled.img`
    width:150px;
    height:140px;
`