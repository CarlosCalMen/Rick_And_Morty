import Card from '../Card/Card';
import {connect} from 'react-redux';

const Favorites=({myFavorites})=>{


    return (
        <>
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
 