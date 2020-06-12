import React, {useEffect} from "react";
import { useQuery } from "@apollo/react-hooks";
import {jokesCategories} from "../queries";
import { connect } from 'react-redux';
import {updateCategory} from "../redux/action/jokesAction";
import Loader from 'react-loader-spinner'
import Categories from '../components/categories';
import Joke from '../components/jokes/joke';
import './App.css';

const App = ({updateCategory, category}) => {
    const { loading, data, error } = useQuery(jokesCategories);
    // fetch data from server
    useEffect(() => {
        const update = () => {
            if(!loading && ! error){
                return updateCategory(data.categories[0])
            }
        }
        update()
    }, [data, error, loading, updateCategory]);

    if(loading){
        return <div className="loader"><Loader color='blue' type='BallTriangle'/></div>
    }
    return (
        <div className="app">
            <div className='section-A'>
                <div className="brand">Chuck Challenge</div>
                <div>Select chuck categories(card to the left) to view joke</div>
            </div>
            <div className='section-B'>
                <Categories loading={loading} error={error} data={data}/>
                <div className='jokes-sect'><Joke  /></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = () => ({
    updateCategory
})

const mapStateToProps = ({jokeReducer}) => ({
    category: jokeReducer
})


export default connect(mapStateToProps, mapDispatchToProps())(App)