
const Sidebar = () => {
    return (
        <aside className="left-sidebar">
            <div className="d-flex no-block nav-text-box align-items-center">
                <span><img src="../assets/images/logo-icon.png" alt="elegant admin template" /></span>
                <a className="waves-effect waves-dark ml-auto hidden-sm-down" href="#"><i
                    className="ti-menu"></i></a>
                <a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="#"><i
                    className="ti-menu ti-close"></i></a>
            </div>
            <div className="scroll-sidebar m-t-30">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li> <a className="waves-effect waves-dark" href="index.html" aria-expanded="false"><i
                            className="fa fa-tachometer"></i><span className="hide-menu">Dashboard</span></a></li>
                        <li> <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false"><i
                            className="fa fa-user-circle-o"></i><span className="hide-menu">Profile</span></a></li>
                        <li> <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"><i
                            className="fa fa-table"></i><span className="hide-menu"></span>Tables</a></li>
                        <li> <a className="waves-effect waves-dark" href="icon-fontawesome.html" aria-expanded="false"><i
                            className="fa fa-smile-o"></i><span className="hide-menu"></span>Icon</a></li>
                        <li> <a className="waves-effect waves-dark" href="map-google.html" aria-expanded="false"><i
                            className="fa fa-globe"></i><span className="hide-menu"></span>Map</a></li>
                        <li> <a className="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false"><i
                            className="fa fa-bookmark-o"></i><span className="hide-menu"></span>Blank</a></li>
                        <li> <a className="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false"><i
                            className="fa fa-question-circle"></i><span className="hide-menu"></span>404</a></li>

                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar