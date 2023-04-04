import {useState} from  'react';

const SearchBar = ({onSearch})=> {
   const [id,setId]=useState('');
   const changeHandler=(event)=>{
      let value=event.target.value;
      setId(value);
   }
   return (
      <div>
         <input type='search' onChange={changeHandler} value={id} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
