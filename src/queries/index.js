import { gql } from 'apollo-boost';
// import gql from 'graphql-tag'

const jokesCategories = gql`
    { categories }
`;

const GET_JOKE = gql`
  query Joke($category: String!){
    joke(category: $category) {
      id,
      value,
      categories
    }
  }
`;

export {
    jokesCategories,
    GET_JOKE
};
