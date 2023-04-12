import {Link} from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import {connect} from 'react-redux';

const Nav=({onSearch,myFavorites})=>{

    
    return (
        <>
            <Link to='/about'><button>About</button></Link> 
            <Link to='/home'> <button>Home</button></Link> 
            <Link to='/favorites'><button>Favorites</button></Link>
            <SearchBar onSearch={onSearch}/>
        </>
    )

}

const mapStateToProps=(state)=>{
    return {myFavorites: state.myFavorites}
};
export default connect(mapStateToProps,null)(Nav);

