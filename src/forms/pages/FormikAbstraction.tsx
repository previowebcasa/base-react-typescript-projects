import {Formik,Form,Field,ErrorMessage} from 'formik';

import * as Yup from 'yup';
import { MyCheckbox } from '../components/MyCheckbox';
import { MySelect } from '../components/MySelect';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css'


export const FormikAbstraction = () => {




 
 

  return(
      <div>
          <h1>Formik Abstraction</h1>
          <Formik
            initialValues={{ firstName:'',
            lastName:'',
            email:''}}
            onSubmit={values =>{  console.log(values);}}
            validationSchema={Yup.object({
                firstName:Yup.string().max(15,'Must be 15 characters or less').required('Required'),
                lastName:Yup.string().max(15,'Must be 15 characters or less').required('Required'),
                email:Yup.string().email('Invalid email address').required('Required')
        
             })}
          
          >
                {
                    formik=>(
                        <Form >
                            <MyTextInput name="firstName" type="text" label="Frist Name"/>
                            <MyTextInput name="lastName" type="text" label="Last Name"/>
                            <MyTextInput name="email" type="email" label="Email"/>
                            <MySelect label="Job Type" name="jobType" >
                                    <option value="">Pick something</option>
                                    <option value="developer">Develper</option>
                                    <option value="designer">Designer</option>
                                    <option value="it-senior">IT Senior</option>
                                    <option value="it-jr">IT Jr.</option>
                                </MySelect>

                                <MyCheckbox label="Termns & Conditions" name="terms" />
                            <button type='submit'>Submit</button>
          
          
          
          
          
                    </Form>

                    )
                }
          </Formik>
        

      </div>
  )

};
