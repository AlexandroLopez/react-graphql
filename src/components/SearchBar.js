import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
    align-items:center;
    padding-left:15px;
    padding-right:15px;

    top: 500px;
    left: 255px;
    width: 100%;
    box-sizing:border-box;
    height: 70px;
    background: #F7F7F8 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;

    input {
        border-radius: 5px;
        padding-right:15px;
        opacity: 1;
        text-align: center;
        top: 515px;
        height: 40px;
        background: #EFEFF2 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
    }
    select{
        padding-right:15px;
  
        background: #EFEFF2 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
        text-align: center;

        top: 515px;
        height: 40px;
        background: #EFEFF2 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
    }
`;

const SearchBar = () => {
    return (
        <Container>
            <input type='text' placeholder='Search' />
            <select >
                <option>Post</option>
                <option>Post2</option>
                <option>Post3</option>
                <option>Post4</option>
                <option>Post5</option>
            </select>
        </Container>
    )
}

export default SearchBar
