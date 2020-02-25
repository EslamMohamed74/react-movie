import React, { Component } from "react";
import axios from 'axios';


import HeroImage from './../HeroImage/HeroImage';
import Search from './../Search/Search';
import Movies from './../Movies/Movies';
import Loader from './../Loader/Loader';
import LoadMore from "./../LoadMore/LoadMore";

import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            heroImage: null
        };
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
    }
    

   
    getPopularMovies = (page) => {


        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&page=' + page)
            .then(response => {
                this.setState({
                    movies: this.state.movies.concat(response.data.results),
                    heroImage: response.data.results[0]
                })
            });
    }

    componentDidMount() {
        this.getPopularMovies(this.state.currentPage);
    }
    

    updateCurrentPage = () => {
        this.setState((old)=>{
            return {currentPage:old.currentPage + 1  }
        })       
         this.getPopularMovies(this.state.currentPage);
     }


    render() {
        return (
            <div className="rmdb-home">
                <HeroImage hero={this.state.heroImage} />

                <Search />

                {!this.state.movies ? <Loader /> : <Movies movies={this.state.movies} />}
                <LoadMore loadMore={this.updateCurrentPage} />
            </div>
        );
    }
}

export default Home;