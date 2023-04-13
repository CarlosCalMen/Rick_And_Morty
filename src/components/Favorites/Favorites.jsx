import Card from '../Card/Card';
import {connect,useDispatch} from 'react-redux';
import { filterCards,orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites=({myFavorites})=>{
    
    const [aux,setAux]=useState(false);
    const dispatch=useDispatch();
    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    };
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value));
    };
    return (
        <>
        <select onChange={handleOrder}>
            <option value='A'>Ascendente</option>
            <option value='D'>Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>unknown</option>
            <option value='all'>All Characters</option>
        </select>
        {
            myFavorites?.map((char)=>{
            return <Card 
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}/>})
        }
        </>
    )
};

const mapStateToProps = (state)=>{
    return {myFavorites: state.myFavorites}
};
export default connect(mapStateToProps,null)(Favorites);
 