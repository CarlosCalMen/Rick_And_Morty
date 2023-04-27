import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./actios-type";


const initialState = {
    myFavorites:[],
    allCharacters: [],
};

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return {...state,
                myFavorites: payload, 
                allCharacters: payload     
                // myFavorites:state.allCharacters,payload],
                // allCharacters:[...state.allCharacters,payload]
            }
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };    
        // case REMOVE_FAV:
        //     return {...state,
        //             myFavorites:state.myFavorites.filter((char)=>char.id !== payload)
        //             //creo se debe eliminar el personaje de allCharacters
        //     }
        case FILTER:
            const allCharactersFiltered=state.allCharacters.filter((char)=>char.gender === payload)
            return {...state,myFavorites:
                             payload==='all'
                             ?[...state.allCharacters] 
                             :allCharactersFiltered
            }
        case ORDER:{
            const allCharactersOrder= [...state.allCharacters];
            return {...state,
                    myFavorites:
                    payload==='A'
                    ? allCharactersOrder.sort((a,b)=> a.id-b.id)
                    : allCharactersOrder.sort((a,b)=> b.id-a.id)}
                    
      
        }        
        default: return {...state};
    }    
}

export default reducer;