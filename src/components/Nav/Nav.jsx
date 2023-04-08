import {Link} from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";

const Nav=({onSearch})=>{

    return (
        <>
            <Link to='/about'><button>About</button></Link> 
            <Link to='/home'> <button>Home</button></Link> 
            <SearchBar onSearch={onSearch}/>
        </>
    )

}
export default Nav;

