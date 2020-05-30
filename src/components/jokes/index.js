import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { Query } from 'react-apollo'
import {GET_JOKE} from "../../queries";
import ApolloClient from 'apollo-boost';
import {updateCategory} from "../../redux/action/jokesAction";
import gql from 'graphql-tag';
import './jokes.scss'


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
});

class Joke extends Component {
    state = {
        categories: ""
    }

    componentWillMount() {
      client.query({
          query: gql`{categories }`
      }).then(res => {
          const {data: { categories }} = res;
          const {updateCategory} = this.props
          updateCategory(categories[0])

      })
    }

    renderJoke = (category) => {
        return (
            <Fragment>
                <Query query={GET_JOKE} variables={{category}}>
                    {({loading, error, data}) => {
                        if(loading){return <div className='loader'>Loading...</div>}
                        if(error){ return <div>Error</div>}
                        const {joke: {value}} = data;
                        return <div className="joke">{value}</div>
                    }}
                </Query>
            </Fragment>
        )
    }
    render() {
        const { category: {category} } = this.props;
        return (
            <div className="jokes-cont">
                {category !== '' ? this.renderJoke(category): ''}
            </div>
        );
    }
}
const mapDispatchToProps = () => ({
    updateCategory
})

const mapStateToProps = ({jokeReducer}) => ({
    category: jokeReducer
})

export default connect(mapStateToProps, mapDispatchToProps())(Joke);

