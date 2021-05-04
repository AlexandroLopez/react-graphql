import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
top: 500px;
left: 255px;
display:inline;
width: 1410px;
height: 70px;
background: #F7F7F8 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
`;

const Search = styled.input`
top: 515px;
padding-left: 270px;
width: 40%;
height: 40px;
background: #EFEFF2 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;`;

const FilterByName = styled.select`
top: 515px;
left: 975px;
width: 675px;
height: 40px;
background: #EFEFF2 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
`;
const SearchBar = () => {
    return (
        <Container>
            <Search type='text' placeholder='Search' />
            <FilterByName value='post' />
        </Container>
    )
}

export default SearchBar
