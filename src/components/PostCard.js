import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '../icons/right-arrow.png';

const Box1 = styled.div`
  grid-column-start: 1;
  height:auto;
  grid-column-end: 3;
  background-color:#e2e2e2;
    padding:1rem 1rem 0 1rem;
        height:fit-content;
        min-height:215px;
  /* grid-row-start: ;1;
  grid-row-end: 3; */
`;

const Box = styled.div`
    background-color:#e2e2e2;
    padding:1rem 1rem 0 1rem;
        height:fit-content;
        min-height:215px;
      
    `;
const Info = styled.div`
/* margin-top:15px; */
 /* padding-top:15px; */
/* padding-right:15px;  */
 
img{
padding-left:10px;
padding-bottom:0;
bottom:0;
height:15px;
width:15px;
}

`;
const PostCard = ({ post, index }) => {
    console.log(post, 'post')
    console.log(index, 'index')
    return (
        index === 0 ?
            <Box1>
                <h3>{post.title}</h3>
                <h6>{post.body}</h6>
                <Info>
                    Read More
                    <img src={ArrowIcon} ></img>
                </Info>
            </Box1> :
            <Box>
                <h3>{post.title}</h3>
                <h6>{post.body}</h6>
                {/* <a href=''></a> */}
                <Info>

                    Read More
                    <img src={ArrowIcon} ></img>
                </Info>
                {/* {ArrowIcon} */}

            </Box >
    )
}

export default PostCard
