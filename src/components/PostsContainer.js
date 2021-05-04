import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/Queries';
import styled from 'styled-components';
import PostCard from './PostCard';
import PaginationComponent from './PaginationComponent';

const Container = styled.div`
 display: grid;
 padding:1rem;
 
  grid-template-columns: repeat(3,  1fr);
  grid-auto-rows:33%;
  gap: 30px;
  height:40rem;
`;

const PostsContainer = () => {
    const [page, setPage ] = useState(1);

    const handleNextPage =() => setPage(page+1);

    const { loading, data, error } = useQuery(GET_ALL_POSTS, {variables:{
        options: {
            paginate: {
              page: page,
              limit: 5
            }
          }
        }
    });

    console.log(data, 'data');
    return (
        <Container>
            {data?.posts?.data?.map((post, index) => <PostCard key={index} index={index} post={post} />)}
            <PaginationComponent />
        </Container>
    )
}

export default PostsContainer
