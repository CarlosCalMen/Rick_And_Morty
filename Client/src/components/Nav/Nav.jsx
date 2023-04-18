import {Link} from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import {connect} from 'react-redux';
import style from './Nav.module.css'

const Nav=({onSearch,myFavorites})=>{

    
    return (
        <div className={style.contenedor}>
            <div className={style.botones}>
            <Link to='/about'><button>About</button></Link> 
            <Link to='/home'> <button>Home</button></Link> 
            <Link to='/favorites'><button>Favorites</button></Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )

}

const mapStateToProps=(state)=>{
    return {myFavorites: state.myFavorites}
};
export default connect(mapStateToProps,null)(Nav);

