import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/Queries';
import styled from 'styled-components';
import SearchBar from './SearchBar';


const Container = styled.div`
border:2px solid red;
`;

const BodyContainer = (props) => {
    const  {loading, data, error } = useQuery(GET_ALL_POSTS);

    console.log(data, 'data')
    return (
        <Container>
            <SearchBar />
        </Container>
    )
}

export default BodyContainer;
