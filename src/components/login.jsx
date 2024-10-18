import React from "react";
import '../styles/login_style.css';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the form from submitting and reloading the page
        console.log("Form submitted");
    }

    /*onSubmit={handleSubmit}: Passes the function reference, 
    which will be executed when the form is submitted, not immediately upon rendering.*/ 
    return (
        <div className="login">
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Login</button>
            </form>
        </div>

    );
}
export default Login