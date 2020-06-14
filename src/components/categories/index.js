import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import './categories.scss';
import {updateCategory} from "../../redux/action/jokesAction";


function JokesCategories({loading, error, data, updateCategory}) {
    if(loading) {
        return <div className='loader'><Loader type="BallTriangle" /></div>
    }
    if(error) {
        return <div>Error</div>
    }

    const updateJokeCategory = (jokeCategory) => {
        return updateCategory(jokeCategory)
    }

    const renderJokeCategory = () => {
        const { categories } = data;
        return categories.map((jokeCategory, index) => (
            <div
                key={index}
                className="category"
                onClick={() => updateJokeCategory(jokeCategory)}
            >
                { jokeCategory }
            </div>
        ));
    }

    return (
        <div className='categories-sect'>
            {renderJokeCategory()}
        </div>
    )
}


const mapDispatchToProps = () => ({
    updateCategory
});

const mapStateToProps = ({jokeReducer}) => ({
    category: jokeReducer
})

export default connect(mapStateToProps, mapDispatchToProps())(JokesCategories)