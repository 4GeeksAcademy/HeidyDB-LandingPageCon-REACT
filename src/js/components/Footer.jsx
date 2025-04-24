import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-2 mb-0">
            <div className="container">
                <p> <small>Copyright &copy;  {new Date().getFullYear()}</small></p> 
            </div>
        </footer>
     )
}

export default Footer;