import {useState} from 'react'
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';


function App() {
   //<SearchBar onSearch={(characterID) => window.alert(characterID)} />
   const [characters,setCharacters]=useState([]);

   const onSearch=(id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   
   }

   const onClose=(id) => {
      const x=characters.filter((character)=>character.id!==parseInt(id))
         setCharacters(x)
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;

