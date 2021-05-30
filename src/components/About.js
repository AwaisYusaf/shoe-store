import React from 'react'
import styled from 'styled-components';

function About() {
    return (
        <Container>
            <Image src='/images/about.jpg'/>  
            <AboutUs>
                <h1>About Us</h1>
                <p>
                Nike shoes are a good brand that you can wear. Nike is one of the best brands that you can obtain these days. These shoes are made to use them in some sports. This shoe provides the user great comfort and effectiveness in the activities. This brand also made different designs in accord with the different sports that exist in the world. This brand is a monopoly now in actuality, with its great demand around the world.
                </p>
                <br/><br/>
                <p><strong>Email : </strong>nike@example.com</p>
                <p><strong>Address : <br/></strong>
                    One Bowerman Drive<br/>
                    Beaverton, OR 97005<br/>
                    Phone: 1-503-671-6453<br/>
                    7:30 a.m. - 5:30 p.m. PT, Monday - Friday (except holidays).</p>
            </AboutUs>          
        </Container>
    )
}
const AboutUs = styled.div`
    margin: 0 20px;

`
const Image = styled.img`
    padding-top:20px;
    padding-left:50px;
    padding-right:20px;
    padding-bottom:40px;
    background-color:#d1d1d1;
    margin:10px;
    width:50%;
    height:40%;
    @media (max-width:800px){
        width:85%;
        height:50%;
        margin:0;

    }
`
const Container = styled.div`
    display:flex;
    @media (max-width:800px){
        flex-direction:column;
    }

`

export default About;
