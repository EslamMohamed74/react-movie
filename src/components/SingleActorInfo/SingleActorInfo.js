import React from 'react';
import './SingleActorInfo.css'

function SingleActorInfo(props) {
    console.log(props);
    return (
        <div class="actorContainer">
            <div class="avatar">
                <img src={`http://image.tmdb.org/t/p/w154/${props.info.profile_path}`} height="200" width="200" />
                <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="200" width="200" />
            </div>
            <h2>{props.info.name}</h2>
            <h4>{props.info.known_for_department}</h4>
            <p>Birthday : {props.info.birthday}</p>
            <p>Place Of Birth : {props.info.place_of_birth}</p>
            <p>Popularity : {props.info.popularity}</p>
        </div>
    );
}

export default SingleActorInfo;
