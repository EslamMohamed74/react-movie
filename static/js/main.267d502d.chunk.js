(window.webpackJsonpcinema=window.webpackJsonpcinema||[]).push([[0],{33:function(e,t,a){e.exports=a(73)},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=a(6),m=a(13);a(38);var l=function(){return r.a.createElement("div",{className:"rmdb-header"},r.a.createElement("div",{className:"rmdb-header-content"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{className:"rmdb-logo",src:"https://i.imgur.com/0GdlwCQ.png",alt:"rmdb-logo"})),r.a.createElement("img",{className:"rmdb-tmdb-logo",src:"https://i.imgur.com/lYZGBVp.png",alt:"tmdb-logo"})))},s=a(7),u=a(8),d=a(10),f=a(9),b=a(16),v=a(11),h=a(12),p=a.n(h);a(61);var g=function(e){return e.hero?r.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('http://image.tmdb.org/t/p/w1280/".concat(e.hero.backdrop_path,"'), rgb(28, 28, 28)")}},r.a.createElement("div",{className:"rmdb-heroimage-content"},r.a.createElement("div",{className:"rmdb-heroimage-text"},r.a.createElement("h1",null,e.hero.title),r.a.createElement("p",null,e.hero.overview)))):null};a(62);var E=function(e){return r.a.createElement("div",{className:"rmdb-grid-element"},r.a.createElement("div",{className:"rmdb-moviethumb"},r.a.createElement(i.b,{to:"/movie/".concat(e.movie.id)},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.movie.poster_path),alt:"moviethumb"}))))},N=(a(63),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],query:""},a.searchHandler=function(e){var t=e.target.value;a.setState({query:t})},a.clickHandler=function(e){e.preventDefault(),a.state.query.length>0?p.a.get("https://api.themoviedb.org/3/search/movie?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&https://api.themoviedb.org/3/search/movie?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&query=".concat(a.state.query,"&page=1&include_adult=falsepage=1&include_adult=false")).then(function(e){a.setState({movies:e.data.results})}):a.setState({movies:[]})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies?this.state.movies.map(function(e,t){return r.a.createElement(E,{movie:e,key:t})}):null;return r.a.createElement("div",null,r.a.createElement("div",{className:"rmdb-searchbar"},r.a.createElement("div",{className:"rmdb-searchbar-content"},r.a.createElement("span",{"aria-hidden":"true",className:"fa fa-search fa-2x rmdb-fa-search"}),r.a.createElement("form",{onSubmit:this.clickHandler},r.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Write what are you search for and press enter",onChange:function(t){return e.searchHandler(t)}})))),t.length>0?r.a.createElement("div",{className:"rmdb-home-grid"},r.a.createElement("div",{className:"rmdb-grid"},r.a.createElement("h1",null,"Best Matches"),r.a.createElement("div",{className:"rmdb-grid-content"},t.length>0?t:""))):"")}}]),t}(n.Component));a(64);var y=function(e){var t=e.movies.map(function(e,t){return r.a.createElement(E,{key:t,movie:e})});return r.a.createElement("div",{className:"rmdb-home-grid"},r.a.createElement("div",{className:"rmdb-grid"},r.a.createElement("h1",null,"Popular Movies"),r.a.createElement("div",{className:"rmdb-grid-content"},t.length>0?t:"")))};a(65);var k=function(){return r.a.createElement("div",{className:"loader"})},w=(a(66),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rmdb-loadmorebtn"},r.a.createElement("button",{id:"loadMore",type:"button",onClick:this.props.loadMore},"Load more"))}}]),t}(n.Component)),O=(a(67),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).getPopularMovies=function(e){p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US&page="+e).then(function(e){a.setState({movies:a.state.movies.concat(e.data.results),heroImage:e.data.results[0]})})},a.updateCurrentPage=function(){a.setState(function(e){return{currentPage:e.currentPage+1}}),a.getPopularMovies(a.state.currentPage)},a.state={movies:[],currentPage:1,heroImage:null},a.updateCurrentPage=a.updateCurrentPage.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getPopularMovies(this.state.currentPage)}},{key:"render",value:function(){return r.a.createElement("div",{className:"rmdb-home"},r.a.createElement(g,{hero:this.state.heroImage}),r.a.createElement(N,null),this.state.movies?r.a.createElement(y,{movies:this.state.movies}):r.a.createElement(k,null),r.a.createElement(w,{loadMore:this.updateCurrentPage}))}}]),t}(n.Component)),j=(a(68),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}));var I=function(e){return e.info?r.a.createElement("div",null,r.a.createElement("div",{className:"rmdb-navigation"},r.a.createElement("div",{className:"rmdb-navigation-content"},r.a.createElement(i.b,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"/"),r.a.createElement("p",null,e.info.title))),r.a.createElement("div",{className:"rmdb-movieinfo",style:{background:"url(http://image.tmdb.org/t/p/w1280/".concat(e.info.backdrop_path,")")}},r.a.createElement("div",{className:"rmdb-movieinfo-content"},r.a.createElement("div",{className:"rmdb-movieinfo-thumb"},r.a.createElement("div",{className:"rmdb-moviethumb"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.info.poster_path),alt:"moviethumb"}))),r.a.createElement("div",{className:"rmdb-movieinfo-text"},r.a.createElement("h1",null,e.info.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.info.overview),r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"rmdb-rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.info.vote_average}),r.a.createElement("p",{className:"rmdb-score"},e.info.vote_average)),r.a.createElement("h3",null,"DIRECTOR"),r.a.createElement("p",{className:"rmdb-director"},"David Lowery")),r.a.createElement("span",{"aria-hidden":"true",className:"fa fa-film fa-5x fa-film"}))),r.a.createElement("div",{className:"rmdb-movieinfobar"},r.a.createElement("div",{className:"rmdb-movieinfobar-content"},r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement("span",{"aria-hidden":"true",className:"fa fa-clock-o fa-2x fa-time"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",(t=e.info.runtime,Math.floor(t/60)+"h "+t%60+"m"))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement("span",{"aria-hidden":"true",className:"fa fa-money fa-2x fa-budget"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",j.format(e.info.budget))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement("span",{"aria-hidden":"true",className:"fa fa-ticket fa-2x fa-revenue"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",j.format(e.info.revenue)))))):r.a.createElement(k,null);var t};a(69);var _=function(e){var t=e.info.profile_path?r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w154/".concat(e.info.profile_path),alt:"actorthumb"}):r.a.createElement("img",{src:"https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg",alt:"noImage"});return r.a.createElement("div",{className:"rmdb-grid-element"},r.a.createElement("div",{className:"rmdb-actor"},r.a.createElement(i.b,{to:"/person/".concat(e.info.id)},t),r.a.createElement("span",{className:"rmdb-actor-name"},e.info.name),r.a.createElement("span",{className:"rmdb-actor-character"},e.info.character)))};var M=function(e){var t=e.actors?e.actors.map(function(e,t){return r.a.createElement(_,{info:e,key:t})}):null;return r.a.createElement("div",{className:"rmdb-movie-grid"},r.a.createElement("div",{className:"rmdb-grid"},r.a.createElement("h1",null,"Actors"),r.a.createElement("div",{className:"rmdb-grid-content"},t)))},P=(a(70),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={movieInfo:null,actors:null},a.getMovieInfo=function(){var e=a.props.match.params.movieId;p.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US")).then(function(e){a.setState({movieInfo:e.data})})},a.getMovieActors=function(){var e=a.props.match.params.movieId;p.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=b9afb4b37a118c901bdbfcccfa450fe0")).then(function(e){a.setState({actors:e.data.cast})})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovieInfo(),this.getMovieActors()}},{key:"render",value:function(){return r.a.createElement("div",{className:"rmdb-movie"},r.a.createElement(I,{info:this.state.movieInfo}),r.a.createElement(M,{actors:this.state.actors}))}}]),t}(n.Component));a(71);var S=function(e){return console.log(e),r.a.createElement("div",{class:"actorContainer"},r.a.createElement("div",{class:"avatar"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w154/".concat(e.info.profile_path),height:"200",width:"200",alt:"noImage"}),r.a.createElement("img",{src:"http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original",height:"200",width:"200",alt:"noImage"})),r.a.createElement("h2",null,e.info.name),r.a.createElement("h4",null,e.info.known_for_department),r.a.createElement("p",null,"Birthday : ",e.info.birthday),r.a.createElement("p",null,"Place Of Birth : ",e.info.place_of_birth),r.a.createElement("p",null,"Popularity : ",e.info.popularity))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={actorInfo:null},a.getActorInfo=function(){var e=a.props.match.params.personId;p.a.get(" https://api.themoviedb.org/3/person/".concat(e,"?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US")).then(function(e){a.setState({actorInfo:e.data})})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getActorInfo()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.actorInfo?r.a.createElement(S,{info:this.state.actorInfo}):null)}}]),t}(n.Component);a(72);var x=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(l,null),r.a.createElement(m.a,{path:"/",exact:!0,component:O}),r.a.createElement(m.a,{path:"/movie/:movieId",component:P}),r.a.createElement(m.a,{path:"/person/:personId",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.267d502d.chunk.js.map