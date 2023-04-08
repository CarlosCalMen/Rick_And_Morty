import {useState} from 'react'
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import './App.css';

const URL_BASE='https://be-a-rym.up.railway.app/api/character';
const API_KEY='364df2af0854.c2572fb0d563d940eb99';


function App() {
   //<SearchBar onSearch={(characterID) => window.alert(characterID)} />
   const [characters,setCharacters]=useState([]);

   const onSearch=(id)=>{
      if (characters.find((character)=>character.id===Number(id))) return alert('Personaje ya cargado');
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
          if (data.name) {
               setCharacters((characters) => [...characters, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose=(id) => {
     setCharacters(characters.filter((character)=>character.id !==id));
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>    
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;

