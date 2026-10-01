import React,{useReducer}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLike } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';
import * from './App.jsx';

const API_URL='http://localhost:3000/Movies';

const initialState={
    movies:[],
    loading:'',
    selectedMovie:'Tous'
};

function movieReducer(state,action){
    switch(action.type){
        case 'SET_MOVIES':
            return{...state,movies:action.payload};
        
        case 'SET_LOADING':
            return{...state,searchTerm:action.payload};

        case 'Set_CATEGORY':
            return{...state,selectedMovie:action.payload};

        case 'TOGGLE_LIKE':
            return{
                ...state,
                movies:state.movies.map((movie)=>
                    movie.id===action.payload
                       ?{...movie,liked:!movie.liked}
                       :movie
                ),
            };

        case 'DELETE_MOVIE':
            return{
                ...state,
                movies:state.movies.filter((movies)=>movies.id!==action.payload),
            };

        default:
            return state;
    }
}

export default movieReducer;