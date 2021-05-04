import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LOAD_POST } from '../graphQl/Queries';
import styled from 'styled-components';
import ArrowIcon from '../icons/right-arrow.png';
import LeftArrowIcon from '../icons/left-arrow.png';
import Comments from './Comments';

const Container = styled.div`
    display: grid;
    grid-template-columns: 17% auto 17%;
    margin:0,auto;
    justify-content:center;
    grid-auto-rows:100%;
    gap: 1rem;
    height:auto;
`;

const Main = styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
    height:auto;
    padding:0.5rem;
  h1{
    padding-top:1rem;
    font: normal normal normal 70px/90px Montserrat;
    letter-spacing: 0px;
    text-align:left;
  }
  h4{
    padding-top:1rem;
    font:  normal normal normal 16px/25px Segoe UI;
    letter-spacing: 0px;
    color: #6C6C78;
    opacity: 1;
  }

`;

const ActionsDiv = styled.div`
    padding-top:5rem;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content:end;
    align-content:flex-end;
`;

const Left = styled.div`
justify-self:left;
font-size:16px;
align-items:center;
img {
    padding-right:10px;
    padding-bottom:0;
    bottom:0;
    height:15px;
    width:15px;
    }

`;
const Right = styled.div`
justify-self:right;
align-items:center;
font-size:16px;
img {
    padding-left:10px;
    padding-bottom:0;
    bottom:0;
    height:15px;
    width:15px;
    }
`;

const AuthorDiv = styled.div`
    display: grid;
    font-weight:400;
    grid-template-columns: 50% 50%;
    text-align:left;
    justify-items:center;
    padding:0.1rem;
    height:5rem;
    background: #F7F7F8 0% 0% no-repeat padding-box;
    div{
        h6{
            margin:0;
            font-weight:700;
            font-size:16px;
        }
    }
`;

const capitalizeFirst = (value) => value && value[0].toUpperCase() + value.slice(1);

const Post = () => {
    const { id } = useParams();
    const [postID, setPostID] = useState(id);
    const { data } = useQuery(LOAD_POST, {
        variables: { id }
    });

    const handleNext = () =>setPostID(postID+1);
    return (
        <Container>
            <div>

            </div>
            <Main>
                <h1>{capitalizeFirst(data?.post?.title)}.</h1>
                <h4>
                    {capitalizeFirst(data?.post?.body)}
                </h4>
                <ActionsDiv>
                    <Left>
                        <img src={LeftArrowIcon} ></img>
                        Previous article

                    </Left>
                    <Right >Next article
                    <img src={ArrowIcon} onClick={() =>handleNext()} ></img>
                    </Right>

                </ActionsDiv>
                <AuthorDiv>
                    <div>
                        Author Name
                    <div>
                            <h6>John DOe</h6>
                        </div>

                    </div>

                    <div>
                        Address
                   <div>
                            <h6>John DOe</h6>
                        </div>
                    </div>
                </AuthorDiv>

                <Comments />
            </Main>
            <div>

            </div>
        </Container>
    )
}

export default Post
