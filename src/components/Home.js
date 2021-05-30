import styled from 'styled-components';
import React from 'react'
import Carousel from 'react-elastic-carousel';
import Shoes from '../dataStore/Shoes.json';
import {Link} from 'react-router-dom';
function Home() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
      ];
    return (
        <div>
        <Carousel breakPoints={breakPoints}>
            {Object.keys(Shoes).map(key=>{
                if(key === "nike-quest-3-premium"){
                    return;
                }
                return (
                    <CustomImage src={Shoes[key].image}>
                        <h2>{Shoes[key].name}</h2>
                    </CustomImage>
                );
            })}
        </Carousel>
        <HomeDetails>
            <h2>Nike Shoes</h2>
            <p>
                Nike shoes are a good brand that you can wear. Nike is one of the best brands that you can obtain these days. These shoes are made to use them in some sports. This shoe provides the user great comfort and effectiveness in the activities. This brand also made different designs in accord with the different sports that exist in the world. This brand is a monopoly now in actuality, with its great demand around the world.
                <br/>
                Nike shoes have cool and aerodynamic designs depending on the sport. Shoes are made to be useful for sports activities and also to provide a good looking style in what people wear. A good shoe design makes the sportsman feel more comfortable and better performance in what is doing. The variety of colors of the shoe, provide a nice contrast between the clothes that are being used. The craziest the colors are, the fancier the shoes are going to be. The simplest the shoes are, the less attention the shoes may cause and people are going to find better stylish shoes to wear. The Nike shoes have a cool and new design every six months. This brand provides the user comfort and lightness. Usually, the brand provides designs according to the sport and made the design with specific characteristics that will help the sportsman have a good performance. Nike shoe company is interested also in providing a fashionable design just to wear even though if the person is not going to use it for sports reasons. The variety in colors that this brands provide are a lot. People always find a nice colorful design in this brand.
            </p>
            <Link to='/products'>Buy Now</Link>
        </HomeDetails>
        </div>
    )
}
const HomeDetails = styled.div`
    margin:30px 10px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding: 0 60px;
    align-items:center;
    a{
        color:white;
        background-color:black;
        width:130px;
        text-align:center;
        text-decoration:none;
        padding:10px 15px;
        font-weight:600;
        border-radius:100px;
        margin:10px 0;
        text-transform:uppercase;
    }
    a:hover{
        background:white;
        color:black;
        border:1px black solid;
    }


`
const CustomImage = styled.div`
    width:700px;
    height:600px;
    position:center;
    background-size:cover;
    margin:0 5px;
    background-image : url(${props=>props.src});
    text-align:center;
    transition:transform 0.5s;
    &:hover{
        transform:translateY(8px);
    }
    @media(max-width:780px){
        width:500px;
        height:300px;
    }
`
export default Home;
