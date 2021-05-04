import React from 'react';
import styled from 'styled-components';
import BodyContainer from './BodyContainer';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/Queries';

const HomeContainer = styled.div`
    height:100%;
    width:100%;
`;

const Container = styled.div`
    top: 0px;
    left: 0px;
    height:400px;
    width: 1920px;
    background: #184979 0% 0% no-repeat padding-box;
    opacity: 1;
h1{
    top: 157px;
    padding-top:5rem;
    padding-left:5rem;
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
    const {  data } = useQuery(GET_ALL_POSTS);
    console.log(data, 'dataa')
    return (
        <HomeContainer>
            <Container>
                <h1>Posts found:{data?.posts?.data?.length || 11}</h1>
            </Container>
            <BodyContainer />
        
        </HomeContainer>
    )
}

export default Home;
