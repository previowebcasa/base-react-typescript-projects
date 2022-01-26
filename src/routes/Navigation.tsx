import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";
import { FormikYupPage } from '../forms/pages/FormikYupPage';
import { RegisterPage } from "../forms/pages/RegisterPage";
import logo from '../logo.svg'
import { FormikComponents } from '../forms/pages/FormikComponents';
import { FormikAbstraction } from "../forms/pages/FormikAbstraction";
import { RegisterFormikPage } from "../forms/pages/RegisterFormikPage ";
import { DynamicForm } from '../forms/pages/DynamicForm';
export const Navigation = () => {
    return (
        <>
             <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo}  alt="logo react" />
                        <ul>
                            <li>
                                <NavLink to="/register"  className={({isActive})=> isActive ? 'nav-active' :''}>Home</NavLink>
                            </li>
                            <li>

                                <NavLink to="/formik-basic" className={({isActive})=> isActive ? 'nav-active' :''}>Formik Basic</NavLink>
                                
                            </li>
                            <li>

                                <NavLink to="/formik-yup" className={({isActive})=> isActive ? 'nav-active' :''}>Formik Yup</NavLink>

                            </li>
                            <li>

                                <NavLink to="/formik-components" className={({isActive})=> isActive ? 'nav-active' :''}>Formik Components</NavLink>

                            </li>
                            <li>

                                <NavLink to="/formik-abstraction" className={({isActive})=> isActive ? 'nav-active' :''}>Formik Abstraction</NavLink>

                            </li>
                            <li>

                                <NavLink to="/register-formik" className={({isActive})=> isActive ? 'nav-active' :''}>Register Formik Page</NavLink>

                            </li>
                            <li>

                                <NavLink to="/dynamic-form" className={({isActive})=> isActive ? 'nav-active' :''}>Dynamic Form</NavLink>

                            </li>
                        </ul>
                        
                    </nav>
                    <Routes>
                        <Route path="formik-yup" element={<FormikYupPage/>} />
                        <Route path="formik-basic" element={<FormikBasicPage/>} />
                        <Route path="formik-components" element={<FormikComponents/>} />
                        <Route path="formik-abstraction" element={<FormikAbstraction/>} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="register-formik" element={<RegisterFormikPage/>} />
                        <Route path="dynamic-form" element={<DynamicForm/>} />
                        <Route path="/*" element={<Navigate to="/register" replace/>} />
                    </Routes>
                </div>
             </BrowserRouter>
        </>
    )
}
