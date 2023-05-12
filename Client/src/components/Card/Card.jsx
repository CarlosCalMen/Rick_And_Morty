import {Link,useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { useState,useEffect } from 'react';
import { addFav,removeFav } from '../../redux/actions';
import style from './Card.module.css';

const Card=({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites})=> {
   const [isFav,setIsFav]=useState(false);

   const handleFavorite=()=>{
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose});
      }
   };
   
   useEffect(() => {
      myFavorites.forEach((char) => {
         if (char.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   let {pathname} = useLocation();
   
   return (
      <div className={style.carta}>
         <div className={style.contenedorBoton}>
         {
            isFav 
            ? (<button onClick={handleFavorite}>❤️</button>)
            : (<button onClick={handleFavorite}>🤍</button>)
         };
         {
            pathname!=='/favorites'
            ?(<button className={style.boton}onClick={()=>onClose(id)}>X</button>)
            :null
         }
         </div>
         <img src={image} alt='' /> 
         {/*<h2>{id}</h2>*/}
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id))}
};

const mapStateToProps=(state)=>{
   return {myFavorites:state.myFavorites}
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);

