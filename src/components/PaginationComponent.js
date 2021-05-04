import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    padding:1rem;
    grid-template-columns:33% 33% 33%;
    gap: 30px;
    align-items:center;
    justify-content:center;
    margin-left:1rem;
    box-sizing:border-box;
    margin-right:1rem;
    height:4rem;
    div{
        padding:0.2rem;
    }
    h3{
        text-align:center;
        padding-bottom:1rem;
    }
    ul{
        align-items:stretch;
        list-style-type: none;
    }
`;

const PaginationComponent = (props) => {
    const { page, handleNextPage, handlePreviousPage, maxPages } = props;

    const range = []
    for (let val = 0; val < maxPages; val++) {
        range.push(val);
    }

    return <>
        <Container>
            <div>
                <button disabled={page === 1} onClick={handlePreviousPage}>Previous page</button>
            </div>
            <div>
                <h3>Current page: {page} {maxPages && `of  ${maxPages || page + 1}`}</h3>

            </div>
            <div style={{ textAlign: 'right' }}>
                <button disabled={page === maxPages} onClick={handleNextPage}> Nextpage</button>

            </div>
        </Container>
    </>
}

export default PaginationComponent;
