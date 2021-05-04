import React from 'react';
import styled from 'styled-components';
import Posts from './BodyContainer';
const Container = styled.div`
top: 0px;
left: 0px;
width: 1920px;
height: 400px;
background: #184979 0% 0% no-repeat padding-box;
opacity: 1;
h1{
    top: 157px;
    /* padding-top: 157px; */
/* padding-left: 17%; */
/* padding-left: 254px; */
left: 254px; 
width: 730px;
height: 86px;
text-align: left;
font: normal normal normal 70px/90px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
`;

const Home = () => {
    return (
        <>
        <Container>
            <h1>Posts found:11</h1>
        </Container>
        <Posts/>
        </>
    )
}

export default Home;
