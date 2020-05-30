import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {connect} from 'react-redux';
import {GET_CATEGORIES} from "../../queries";
import {updateCategory} from "../../redux/action/jokesAction";
import Loader from 'react-loader-spinner';
import './categories.scss';

class Categories extends Component {

    renderCategories = () => {
        return (
            <Query query={GET_CATEGORIES}>
                {( {loading, error, data}) => {
                    if(loading){return <div className='loader'><Loader type="BallTriangle" /></div>}
                    if(error){ return <div>Error</div>}
                    const { categories } = data;
                    return categories.map((category, index) => {
                        const { updateCategory } = this.props;
                        return (
                            <div key={index} className="category" onClick={() => updateCategory(category)}>{ category }</div>
                        )
                    })
                }}
            </Query>
        )
    }
    render() {
        return (
            <div className='categories-sect'>
                {this.renderCategories()}
            </div>
        );
    }
}

const mapDispatchToProps = () => ({
    updateCategory
})

export default connect(null, mapDispatchToProps())(Categories);