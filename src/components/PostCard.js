import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '../icons/right-arrow.png';
import { Link } from 'react-router-dom';

const Box1 = styled.div`
    grid-column-start: 1;
    height:auto;
    grid-column-end: 3;
    background-color:#F7F7F8;
    padding:1rem 1rem 0 1rem;
    height:fit-content;
    min-height:215px;
`;

const Box = styled.div`
    background-color:#F7F7F8;
    padding:1rem 1rem 0 1rem;
    height:fit-content;
    min-height:215px;  
    `;
const Info = styled.div`
    a {
        text-decoration:none;
        color:black;
    }
    img {
    padding-left:10px;
    padding-bottom:0;
    bottom:0;
    height:15px;
    width:15px;
    }

`;

const capitalizeFirst = (value) => value[0].toUpperCase() + value.slice(1);

const PostCard = ({ post, index }) => {

    return (
        index === 0 ?
            <Box1>
                <h3>{capitalizeFirst(post?.title)}</h3>
                <h6>{capitalizeFirst(post?.body)}</h6>
                <Info>
                    <Link to={`/post/${post?.id}`}>
                        Read More
                    <img src={ArrowIcon} ></img>
                    </Link>
                </Info>
            </Box1> :
            <Box>
                <h3>{capitalizeFirst(post?.title)}</h3>
                <h6>{capitalizeFirst(post?.body)}</h6>
                <Info>

                    <Link to={`/post/${post?.id}`}>
                        Read More
                    <img src={ArrowIcon} ></img>
                    </Link>


                </Info>

            </Box >
    )
}

export default PostCard
