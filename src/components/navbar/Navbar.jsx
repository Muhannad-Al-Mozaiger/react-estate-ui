import { Link } from "react-router-dom";
import "./navbar.scss"
import { useState } from "react"
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = true;
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
                {user ? (
                    <div className="user">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span>John</span>
                        <Link to="/profile" className="profile">
                        <div className="notification">
                            3
                        </div>
                        <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="">Login</a>
                        <a href="" className="register">Register</a>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className={menuOpen ? "menu active" : "menu"}>
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