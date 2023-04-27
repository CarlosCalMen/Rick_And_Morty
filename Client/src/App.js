import {useState,useEffect} from 'react'
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import './App.css';

const URL_BASE='http://localhost:3001/rickandmorty/character';///${id}'//'https://be-a-rym.up.railway.app/api/character';
//const API_KEY='364df2af0854.c2572fb0d563d940eb99';
// const EMAIL='carloscalmen11@gmail.com';
// const PASSWORD='carlos123'
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const [characters,setCharacters]=useState([]);
   const [access,setAccess] = useState(false);
   const {pathname}=useLocation();
   const navigate=useNavigate();
   
   const login = async (userData) => {
      try{
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      }  catch (error)
      {
         console.log(error.message);
      }   
   }

   const onSearch= async(id)=>{
      try {
         if (characters.find((character)=>character.id===+id)) return alert('Personaje ya cargado');
         const {data} = await axios(`${URL_BASE}/${id}`)
         if (data.name) 
         setCharacters((characters)=>[...characters,data]);
      } catch (error) {
         alert('No hay personajes con ese ID'); 
      }
   }

   const onClose=(id) => {
     setCharacters(characters.filter((character)=>character.id !==id));
   };

   return (
      <div className='App'>
         {pathname!=='/' && <Nav onSearch={onSearch}/>}
         <Routes>    
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;

