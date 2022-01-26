import { useState, ChangeEvent } from 'react';



export const useForm=<T>(initialState:T)=>{



    const [FormData, setFormData] = useState(initialState);




    const onChange=(event:ChangeEvent<HTMLInputElement>) =>{

        setFormData(prev=>({
            ...prev,
            [event.target.name]:event.target.value

        }));


    }
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const resetForm =()=>{
        setFormData({...initialState})
    }


    return{
        FormData,onChange,resetForm,isValidEmail
    }

}