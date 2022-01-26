import {Formik,Form,Field,ErrorMessage} from 'formik';

import * as Yup from 'yup';
import '../styles/styles.css'


export const FormikComponents = () => {



 

  return(
      <div>
          <h1>Formik Components</h1>
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
                        <label htmlFor="firstName">First Name</label>
                        <Field  type="text" name="firstName"  />
                     
                         <ErrorMessage name="firstName" component={'span'} />
                        <label htmlFor="LastName">Last Name</label>
                        <Field  type="text" name="lastName"  />
                     
                     <ErrorMessage name="lastName" component={'span'} />
                        <label htmlFor="email">Email</label>
                        <Field  type="email" name="email"  />
                     
                         <ErrorMessage name="email" component={'span'}/>
                         
                        <button type='submit'>Submit</button>
          
          
          
          
          
                    </Form>

                    )
                }
          </Formik>
        

      </div>
  )

};
