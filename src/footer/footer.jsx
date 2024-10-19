import React from "react";
import './style.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p>Copyright {new Date().toLocaleDateString()}</p>
            </div>
       </footer> 
    );
}
export default Footer