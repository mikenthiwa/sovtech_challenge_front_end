import React, {Component} from 'react';
import { connect } from 'react-redux';
import jokeReducer from "../redux/reducers/jokeReducer";
import Categories from '../components/categories';
import Joke from '../components/jokes'
import './App.css';

class App extends Component {
    state = {
        category: ''
    }



    render() {
        return (
            <div className="app">
                <div className='section-A'>
                    <div className="brand">Chuck Challenge</div>
                    <div>Select chuck categories(card to the left) to view joke</div>
                </div>
                <div className='section-B'>
                    <Categories />
                    <Joke />
                </div>

            </div>
        );
  }
}

const mapStateToProps = ({jokeReducer}) => ({
    category: jokeReducer
})

export default connect(mapStateToProps)(App);
