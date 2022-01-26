import formJson from '../data/custom-form.json';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components/MyTextInput';


const initialValues:{[key:string]:any}={}
for (const iterator of formJson) {
    initialValues[iterator.name]=iterator.value
}
export const DynamicForm = () => {
   
  return (
      <div>
          <h1>Dynamic Form 11</h1> 


          <Formik initialValues={initialValues}
          onSubmit={values=>console.log(values)}
          >

              {
                (formik)=>(
                      <Form>
                          {formJson.map(({type,label,name,placeholder})=>{
                              return <MyTextInput key={name} type={type} label={label} name={name} placeholder={placeholder}  />
                          })}
                          <button type='submit'>submit</button>

                      </Form>
                  )
              }

          </Formik>
      </div>
  )
};
