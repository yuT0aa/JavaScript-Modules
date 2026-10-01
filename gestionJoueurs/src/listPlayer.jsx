import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://localhost:3100/joueurs';

function listJoueur(state,action){
    switch(action.type){
        case 'AJOUTER_JOUEUR':
            return[...state,action.payload];

        case 'AUGMENTER_SCORE':
            return state.map((joueur)=>
                joueur.id===action.payload
                  ? { ...joueur, score: joueur.score + 1 }
                  : joueur
        );
        
        case 'DIMINUER_SCORE':
      return state.map((joueur) =>
        joueur.id === action.payload
          ? { ...joueur, score: joueur.score - 1 }
          : joueur
      );

        case 'SUPPRIMER_JOUEUR':
        return state.filter((joueur) => joueur.id !== action.payload);

        default:
        return state;
    }
}

export default listJoueur;