import { useState } from "react";
import validation from './validation.js';
import style from './Form.module.css';

const Form = ({login})=>{
    const [userData,setUserData] = useState({email:'',password:''})
    const [errors,setErrors] = useState({});
    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value});
        setErrors(validation({...userData,[event.target.name]:event.target.value}));
    };
    const handleSubmit=(event) => {
        event.preventDefault();
        login(userData);
    };
    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password"/>
            <input type="text" name='password' value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )    
}

export default Form;