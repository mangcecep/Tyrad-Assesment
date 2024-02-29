const Headers = () => {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">

                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <i className="wi wi-sunset"></i>
                            <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span>

                            <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item hidden-sm-up"> <a className="nav-link nav-toggler waves-effect waves-light"
                            href="#"><i className="ti-menu"></i></a></li>
                        <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark"
                            href="#"><i className="fa fa-search"></i></a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search &amp; enter" /> <a
                                    className="srh-btn"><i className="fa fa-times"></i></a>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                    src="../assets/images/users/1.jpg" alt="user" className="img-circle" width="30" /></a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Headers