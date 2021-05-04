import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/Queries';
import styled from 'styled-components';
import PostCard from './PostCard';

const Container = styled.div`
 display: grid;
 padding:1rem;
 
  grid-template-columns: repeat(3,  1fr);
  grid-auto-rows:33%;
  gap: 30px;
  height:40rem;
`;

const PostsContainer = () => {
    const { loading, data, error } = useQuery(GET_ALL_POSTS);

    console.log(data, 'data');
    return (
        <Container>
            {data?.posts?.data?.map((post, index) => <PostCard key={index} index={index} post={post} />)}
        </Container>
    )
}

export default PostsContainer
