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
    const [page, setPage] = useState(1);



    const { data } = useQuery(GET_ALL_POSTS, {
        variables: {
            options: {
                paginate: {
                    page: page || 1,
                    limit: 5
                }
            }
        }
    });
   
    const dataSize = data?.posts?.meta?.totalCount;
    const nextPageAvailable = dataSize > page * 5;

    const handleNextPage = () =>nextPageAvailable && setPage(page + 1);

    const handlePreviousPage = () => page > 1 && setPage(page - 1);

    console.log(nextPageAvailable, 'jel jeste?')

  

    console.log(dataSize, 'data  seize posts container');
    console.log(data, 'data');
    return (<>
        <Container>
            {data?.posts?.data?.map((post, index) => <PostCard key={index} index={index} post={post} />)}
        </Container>
        <PaginationComponent page={page} maxPages={dataSize/5} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
        </>
    )
}

export default PostsContainer
