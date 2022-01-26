import '../styles/styles.css'
import { useState,ChangeEvent,FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

interface Form {
    name:string,
    email:string,
    password1:string,
    password2:string
}
export const RegisterPage = () => {
    const {FormData, onChange,resetForm,isValidEmail }= useForm({
        name:'',    
        email:'',
        password1:'',
        password2:''
    });

    const {name,email,password1,password2}= FormData


   
    const onSubmit =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(FormData);
        resetForm();

    }

    return (

        <div>
            <h1>Register Page</h1>



            <form onSubmit={onSubmit} >
                
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name='name'
                    onChange={onChange}
                    className={`${ name.trim().length<=0  && 'has-error'}`}
                />
                {name.trim().length<=0 && <span>Nombre es necesario </span>}
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email} 
                    onChange={onChange}
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es valido </span>}
                <input 
                    type="password"
                    value={password1}
                    name='password1'
                    placeholder="Password"
                    className={`${ password1.trim().length<=0  && 'has-error'}`}
                    onChange={onChange}
                />
                 {password1.trim().length<=0 && <span>Contraseña es necesaria </span>}
                <input
                    type="password" 
                    value={password2}
                    name='password2'
                    placeholder="Repeat Password"
                    className={`${ password2.trim().length<=0  && 'has-error'}`}
                    onChange={onChange}
                />
                    {password2.trim().length<=0 && <span>Contraseña es necesaria </span>}
                <button type="submit"> Create</button>


            </form>




        </div>
        )
};
