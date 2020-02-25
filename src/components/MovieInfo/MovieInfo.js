import React, { Component } from "react";

 import axios from "axios";


import MovieMasterInfo from "./../MovieMasterInfo/MovieMasterInfo";
import Actors from "./../Actors/Actors";

import "./MovieInfo.css";

class MovieInfo extends Component {

    state = {
        movieInfo: null,
        actors: null
    }

    getMovieInfo = () => {
        const movieId = this.props.match.params.movieId;
        

         axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US`)
             .then(response => {
                 this.setState({
                     movieInfo: response.data
                 });
             });
    }


    getMovieActors = () => {
        const movieId = this.props.match.params.movieId;

         axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b9afb4b37a118c901bdbfcccfa450fe0`)
             .then(response => {
                 this.setState({
                     actors: response.data.cast
                 });
             });
    }

    componentDidMount() {
        this.getMovieInfo();

        this.getMovieActors();
    }

    render() {
        return (
            <div className="rmdb-movie">
                <MovieMasterInfo info={this.state.movieInfo} />

                <Actors actors={this.state.actors} />
            </div>
        );
    }
}

export default MovieInfo;