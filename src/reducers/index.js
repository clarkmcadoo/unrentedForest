import { movieGetter, getNowPlaying } from "../actions";
import { combineReducers } from "redux";
import _ from "lodash";

const initalState = {};

const reducer = (state = initalState, action)=>{
    let newState = _.cloneDeep(state);
    switch (action.type){
        case GET_MOVIE;
        
    }
}