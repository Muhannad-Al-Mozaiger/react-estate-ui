import "./navbar.scss"
import { useState } from "react"
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>Estate</span>

                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                <a href="">Login</a>
                <a href="" className="register">Register</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
                <div className={menuOpen? "menu active" : "menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Sign in</a>
                <a href="">sign up</a>
                </div>
            </div>
            </nav>
    )
}

export default Navbar