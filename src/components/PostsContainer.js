import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/Queries';
import styled from 'styled-components';

const Container =  styled.div`
 display: grid;
  grid-template-columns: repeat(3,  1fr);
  grid-auto-rows:33%;
  /* gap: 10px; */
  height:10rem;
  /* border:2px solid red; */
  div{
      height:50%;
      /* border:3px solid black; */
  }

`;
const Box1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  /* grid-row-start: ;1;
  grid-row-end: 3; */
`;

const PostsContainer = () => {
    const  {loading, data, error } = useQuery(GET_ALL_POSTS);

    console.log(data, 'data')
    return (
        <Container>
            <Box1 >Poyy</Box1>
            <div>Poyy2</div>
            <div>Poyy3</div>
            <div>Poyy4</div>
            <div>Poyy5</div>
            <div>Poyy6</div>
            <div>Poyy7</div>
            <div>Poyy8</div>
            <div>Poyy9</div>
            
        </Container>
    )
}

export default PostsContainer
