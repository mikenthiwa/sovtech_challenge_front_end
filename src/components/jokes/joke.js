import React from 'react';
import {connect} from 'react-redux'
import {useQuery} from "@apollo/react-hooks";
import {GET_JOKE} from "../../queries";
import Loader from 'react-loader-spinner'
import "./jokes.scss";

const Joke = ({category}) => {
    const { category: jokeCategory } = category
    const {loading, error, data} = useQuery(GET_JOKE, {
        variables: {category: jokeCategory}
    })
    if(loading) {
        return <div className="joke-loader"><Loader color='blue' type='BallTriangle' /></div>
    }
    if(error) {
        return <div>Error</div>
    }
    return <div className="jokes-cont">{data.joke.value}</div>
}

const mapStateToProps = ({jokeReducer}) => ({
   category: jokeReducer
})

export default connect(mapStateToProps, null)(Joke)