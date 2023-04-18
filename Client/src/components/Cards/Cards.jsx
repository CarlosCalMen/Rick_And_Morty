import Card from '../Card/Card';
import './Cards.css';

//const clickHandler=()=>{}alert('aqui simulamos el cierre de la carta');

const Cards=({characters,onClose})=> {
   return (
      <div className='contenedor'>
         {characters.map(({id,name,species,gender,image})=>{
         return (<Card
            key={id}      
            id={id}
            name={name}
            species={species}
            gender={gender} 
            image={image}
            onClose={onClose}/>)
            })
         }
      </div>
   );
}

export default Cards;
//origin={character.origin.name}
