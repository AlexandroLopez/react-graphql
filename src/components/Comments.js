import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
background: #F7F7F8 0% 0% no-repeat padding-box;
height:7rem;
margin-top:1rem;
margin-bottom:1rem;
`;

const Comments = () => {
    return (
        <div>
            <h1>Comments</h1>
            <CommentContainer></CommentContainer>
            <CommentContainer></CommentContainer>
            <CommentContainer></CommentContainer>
            
        </div>
    )
}

export default Comments
