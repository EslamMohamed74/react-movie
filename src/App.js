import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import ActorInfo from './components/ActorInfo/ActorInfo';

import './App.css';

function App() {
	return (
		<div>
			<BrowserRouter>

				<Navbar />

				<Route path="/" exact component={Home} />
				<Route path="/movie/:movieId" component={MovieInfo} />
				<Route path="/person/:personId" component={ActorInfo} />
			</BrowserRouter>

		</div>
	);
}

export default App;
