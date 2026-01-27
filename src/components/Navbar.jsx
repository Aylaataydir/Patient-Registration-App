
import logo from "../assets/logo.jpg"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="" width={50} />
                <h5>Central City Medical Center</h5>
            </div>

            <div>
                <p>Patient Registry System</p>
            </div>
        </div>
    )
}

export default Navbar
