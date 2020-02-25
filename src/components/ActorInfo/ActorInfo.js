import React,{Component} from 'react';
import axios from 'axios';
import SingleActorInfo from './../SingleActorInfo/SingleActorInfo';

class ActorInfo extends Component{

    state={
        actorInfo:null,
    };
    
    getActorInfo = () => {
        const personId = this.props.match.params.personId;
        axios.get(` https://api.themoviedb.org/3/person/${personId}?api_key=b9afb4b37a118c901bdbfcccfa450fe0&language=en-US`)
        .then(response =>{
           
              this.setState({
                actorInfo : response.data,
              });
        })
    };
    componentDidMount(){
        this.getActorInfo();
    }

    render(){

        return(
            <div>
               {this.state.actorInfo ? <SingleActorInfo info={this.state.actorInfo}/> : null}
            </div>
        );
    }
}

export default ActorInfo;