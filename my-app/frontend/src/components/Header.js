import "./Header.css"
import logo from '../assets/images/file.png'

function Header(){
    return(
        <div className='nav-bar'>
            <p className="logo"><img src = {logo} alt="Company logo" height = "40" /></p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/testing">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;

