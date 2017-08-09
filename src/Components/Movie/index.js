import React, { Component } from 'react';
import './main.css';
import {connect} from 'react-redux';

// need to get the field names from backend and also figure out the subheader variable name from store
class Movie extends Component {
    render() {
        // let movies = this.props.movies.results.map(details => {
        //     return(
        //         <div className="movie_card" key={id}>
        //             <img className="poster" src={details.poster_path} alt={title}/>
        //             <h3>{title}</h3>
        //             <h5>{release_date}</h5>
        //         </div>
        //     )
        // })
        return (
            <div>
                <h1>MOVIES</h1>
                {/* <h2 className="subheader">{this.props.randompagename}</h2>   */}
                {/* {movies} */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = () => {}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);