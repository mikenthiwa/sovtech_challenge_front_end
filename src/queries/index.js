import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
  query CategoryQuery { categories }
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
    GET_CATEGORIES,
    GET_JOKE
};
