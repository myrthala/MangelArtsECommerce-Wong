import './NavBar.scss'


const NavBar = () => {

    return (
        <header className="navbar">
            <div className="navbar-container">

                <div>
                    <img scr={logoAO} className="AO-logo" alt="logo"/>
                </div>

                <h1 className="navbar-title">The Art Of Angel Ortiz</h1>

                <nav className="navbar-navbar">
                    <a className="navbar-navlink">Home</a>
                    <a className="navbar-navlink">About Angel</a>
                    <a className="navbar-navlink">Gallery</a>
                </nav>
            </div>
        </header>
    )
}