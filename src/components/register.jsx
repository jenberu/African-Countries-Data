import '../styles/register_style.css';


const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="signup-form">
            <h1>SIGN UP</h1>  
            <form onSubmit={handleSubmit}>
                <input type="text" name="first-name" placeholder="First Name" />
                <input type="text" name="last-name" placeholder="Last Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
  </div>

    );
}
export default Signup