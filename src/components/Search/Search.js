import React, { Component } from 'react';
import axios from 'axios';
import SingleMovie from "./../SingleMovie/SingleMovie";
import "./Search.css";

class Search extends Component {



    state = {
        movies: [],
        query: ''
    };

    searchHandler = event => {
        let newValue = event.target.value;
        this.setState({ query: newValue });

    }

    clickHandler = event => {
        event.preventDefault();
        if (this.state.query.length > 0) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&https://api.themoviedb.org/3/search/movie?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&query=${this.state.query}&page=1&include_adult=falsepage=1&include_adult=false`)
                .then(response => {

                    this.setState({
                        movies: response.data.results
                    });


                })
        } else {
            this.setState({
                movies: []
            });
        }

    }
    render() {
        let singleMovie = this.state.movies ? this.state.movies.map((movie, index) => {
            return <SingleMovie movie={movie} key={index} />
        }) : null;

        return (
            <div>


                <div className="rmdb-searchbar">
                    <div className="rmdb-searchbar-content">
                        <span aria-hidden="true" className="fa fa-search fa-2x rmdb-fa-search"></span>


                        <form onSubmit={this.clickHandler}>
                            <input type="text" className="rmdb-searchbar-input" placeholder="Write what are you search for and press enter" onChange={event => this.searchHandler(event)} />

                        </form>
                    </div>

                </div>
                {singleMovie.length > 0 ? <div className="rmdb-home-grid">
                    <div className="rmdb-grid">
                        <h1>Best Matches</h1>
                        <div className="rmdb-grid-content">
                            {singleMovie.length > 0 ? singleMovie : ''}
                        </div>
                    </div>

                </div> : ''}


            </div>
        );
    }

}

export default Search;