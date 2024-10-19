
import { NavLink } from "react-router-dom";
import './style.css'
const options = [
    {
        to: '/course',
        label:'Course',
    },
    {
        to: '/about',
        label:'About',
    },
    {
        to: '/login',
        label:'Login',
    },
    {
        to: '/register',
        label:'Register',
    },
    
]

const Header = () => {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-home">
            <NavLink to='/'   className={({ isActive }) => isActive ? 'links active' : 'links'} >Home</NavLink>  
            </div>
        
        <ul className="nav-bar">{
            options.map((option, index) => {
                return(
                <li key={index} className="nav-bar-item">
                    <NavLink to={option.to}   className={({ isActive }) => isActive ? 'links active' : 'links'} >{ option.label}</NavLink>  
                    </li>
                );
            })
        }
                </ul> 
            </div>
    );
}
export  default Header