import React from 'react';
import styled from 'styled-components';
import PostsContainer from './PostsContainer';
import SearchBar from './SearchBar';

const Container = styled.div`
top: 0px;
left: 0px;
width: auto;
height: auto;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
`;

const BodyContainer = (props) => {
 
    return (
        <Container>
            <SearchBar />
            <PostsContainer />
        </Container>
    )
};
export default BodyContainer;
