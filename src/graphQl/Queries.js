import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
query ($options: PageQueryOptions) {
    posts (options: $options){
        data {
            id
            title
            body
        }
        meta {
            totalCount
        }
    }
}
`;
export const LOAD_POST = gql`
query ($id:ID!){
    post(id:$id){
        id
        title
        body
    }
  }`;

  export const LOAD_USER = gql`
  query ($id:ID!){
    user(id: $id) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
      posts {
        data {
          id
          title
        }
      }
    }
  }`;