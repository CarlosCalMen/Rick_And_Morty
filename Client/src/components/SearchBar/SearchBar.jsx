import {useState} from  'react';
import style from './SearchBar.module.css';

const SearchBar = ({onSearch})=> {
   const [id,setId]=useState('');
   const changeHandler=(event)=>{
      let value=event.target.value;
      setId(value);
   }
   return (
      <div className={style.barra}>
         <input className={style.inputSearch} type='search' onChange={changeHandler} value={id} />
         <button className={style.botonSearch} onClick={()=>{onSearch(id); setId('')} }>Agregar</button>
      </div>  
   );
}

export default SearchBar;
