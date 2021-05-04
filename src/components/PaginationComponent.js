import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';


const PaginationContainer = styled.div`
position:fixed;
bottom:0;
height:4rem;
width:100%;
overflow:hidden;
background-color:orange;
border:2px solid orange;
`;

const PaginationComponent = () => {
    const [activePage, setActivePage] = useState(1);

    const handleChangePage = pageNumber => {
        setActivePage(pageNumber);
    }

    return
    

}

export default PaginationComponent;
