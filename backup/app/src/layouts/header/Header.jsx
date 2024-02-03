import MobileMenu from "./MobileMenu";

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 header">
            <nav className="bg-gray-900">
                <div className="containe flex items-center justify-between py-4">
                    <a className="text-white text-2xl font-bold ml-5" href="/">
                        P. Penev
                    </a>
                    <ul className="hidden md:flex space-x-4 mr-10 text-white ml-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">
                                HOME
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                PROJECTS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/certificates">
                                CERTIFICATES
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/stories">
                                STORIES
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">
                                CONTACTS
                            </a>
                        </li>
                    </ul>
                    {/* For mobile view */}
                    <MobileMenu />
                </div>
            </nav>
        </header>
    );
}

export default Header;
