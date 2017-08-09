import React, { Component } from 'react';
import './main.css';
import {connect} from 'react-redux';
import {playingNowMovies} from '../../actions';
import {bindActionCreators} from 'redux';

// need to get the field names from backend and also figure out the subheader variable name from store
class Movie extends Component {
    componentWillMount(){
        this.props.playingNowMovies()
    }
    render() {
        //maybe w150 also
        let imageStr = 'https://image.tmdb.org/t/p/w300/'
        let movies = this.props.movies.map(details => {
            return(
                <div className="movie_card" key={details.id}>
                    <img className="poster" src={`${imageStr}${details.poster_path}`} alt={details.title}/>
                    <h3>{details.title}</h3>
                    <h5>{details.release_date}</h5>
                </div>
            )
        })
        return (
            <div>
                <h1>MOVIES</h1>
                 <h2 className="subheader">{this.props.subheader}</h2>
                    {movies}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state: ', state);
    return {subheader: state.titles.subheader,
    movies: state.titles.movies}
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({playingNowMovies:playingNowMovies}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);