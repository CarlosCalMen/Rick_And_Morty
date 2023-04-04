import Card from '../Card/Card';
import './Cards.css';

//const clickHandler=()=>{}alert('aqui simulamos el cierre de la carta');

const Cards=({characters,onClose})=> {
   return (
      <div className='contenedor'>
         {characters.map((character)=>{
         return (<Card
            key={character.id}      
            //id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender} 
            image={character.image}
            onClose={onClose}/>)
            })
         }
      </div>
   );
}

export default Cards;
//origin={character.origin.name}
