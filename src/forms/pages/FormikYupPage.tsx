import {useFormik} from 'formik';

import * as Yup from 'yup';
import '../styles/styles.css'


export const FormikYupPage = () => {




 const {handleSubmit,errors,touched,getFieldProps}=useFormik({
     initialValues:{
         firstName:'',
         lastName:'',
         email:''
     },
     onSubmit:values =>{  console.log(values);},
     validationSchema:Yup.object({
        firstName:Yup.string().max(15,'Must be 15 characters or less').required('is Required'),
        lastName:Yup.string().max(15,'Must be 15 characters or less').required('is Required'),
        email:Yup.string().email('Invalid email address').required('is Required')

     })
 })

 

  return(
      <div>
          <h1>Formik Yup</h1>
          <form noValidate  onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                {...getFieldProps('firstName')}
                className={`${ touched.firstName && errors.firstName && 'has-error'}`}
                />
               {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
              <label htmlFor="LastName">Last Name</label>
              <input 
                type="text" 
                {...getFieldProps('lastName')}
                className={`${touched.lastName && errors.lastName && 'has-error'}`}
                />
                 {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                {...getFieldProps('email')}
                className={`${touched.email && errors.email && 'has-error'}`}
                />
                 {touched.email &&errors.email&& <span>{errors.email}</span>}
               
              <button type='submit'>Submit</button>





          </form>

      </div>
  )

};
