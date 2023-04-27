import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./actios-type";
import axios from 'axios';

export const addFav=(character)=>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         // console.log('a ver ' + data);
         // if (!data.lenght) throw Error('No existen favoritos')
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      } 
   };
};

export const removeFav=(id)=>{
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const {data}= await axios.delete(endpoint);
        // if (!data.lenght) throw Error('No existen favoritos')
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
        console.log(error.message);
      }
    };
 }

//     return {type:REMOVE_FAV, payload:id};
// }

export const filterCards = (gender)=>{
    return {type:FILTER,payload:gender}
};
export const orderCards = (orderType)=>{
    return {type:ORDER,payload:orderType}
};

