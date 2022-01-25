import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { RegisterPage } from "../forms/pages/RegisterPage";
import logo from '../logo.svg'
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

                                <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' :''}>About</NavLink>
                                
                            </li>
                            <li>

                                <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active' :''}>Users</NavLink>

                            </li>
                        </ul>
                        
                    </nav>
                    <Routes>
                        <Route path="about" element={<h1>about page</h1>} />
                        <Route path="users" element={<h1>users page</h1>} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="/*" element={<Navigate to="/register" replace/>} />
                    </Routes>
                </div>
             </BrowserRouter>
        </>
    )
}
