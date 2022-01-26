import {useFormik,FormikErrors} from 'formik';




import '../styles/styles.css'
interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

 const validate=(values:FormValues)=>{
     const errors:FormikErrors<FormValues> ={};

     if (!values.firstName) {

        errors.firstName='Required'
         
     }else if(values.firstName.length>15){
         errors.firstName='Must be 15 characters or less';
     }

     if (!values.lastName) {

        errors.lastName='Required'
         
     }else if(values.lastName.length>15){
         errors.lastName='Must be 15 characters or less';
     }

     if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

     return errors;
 }


 const {handleChange,values,handleSubmit,errors,touched,handleBlur}=useFormik({
     initialValues:{
         firstName:'',
         lastName:'',
         email:''
     },
     onSubmit:values =>{  console.log(values);},
     validate
 })

 

  return(
      <div>
          <h1>Formik Basic Tutorial</h1>
          <form noValidate  onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                name="firstName"
                onBlur={handleBlur}
                value={values.firstName}
                onChange={handleChange}
                className={`${ touched.firstName && errors.firstName && 'has-error'}`}
                />
               {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
              <label htmlFor="LastName">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                onBlur={handleBlur}
                value={values.lastName}
                onChange={handleChange}
                className={`${touched.lastName && errors.lastName && 'has-error'}`}
                />
                 {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                className={`${touched.email && errors.email && 'has-error'}`}
                />
                 {touched.email &&errors.email&& <span>{errors.email}</span>}
               
              <button type='submit'>Submit</button>





          </form>

      </div>
  )

};
