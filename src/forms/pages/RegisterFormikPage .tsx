import '../styles/styles.css'

import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';


export const RegisterFormikPage = () => {
  

    return (

        <div>
            <h1>Register Formik Page</h1>

            <Formik initialValues={{ name:'',
            email:'',
            password1:'',
            password2:''
            }}
            onSubmit={values =>{  console.log(values);}}
            
            validationSchema={Yup.object({
                name:Yup.string().max(15,'Must be 15 characters or less').required('Required').min(2,'Must be 2 characters or more'),
                email:Yup.string().email('Invalid email address').required('Required'),
                password1:Yup.string().min(6,'Must be 6 characters or more').required('Required'),
                password2:Yup.string().min(6,'Must be 6 characters or more').required('Required').oneOf([Yup.ref('password1')],'Passwords must match')
        
             })}
            
            >

             {  
                ({handleReset})=>(
                    <Form>
                           <MyTextInput name="name" type="text" placeholder="Name"/>
                            <MyTextInput name="email" type="email" placeholder="Email"/>
                            <MyTextInput name="password1" type="password" placeholder='Password' />
                            <MyTextInput name="password2" type="password" placeholder='Repeat Password' />
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={handleReset} name='reset'>Reset</button>

                    </Form>
                )

             }




            </Formik>

           



        </div>
        )
};
