import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 header">
            <nav className="bg-gray-900">
            <div className="containe flex items-center justify-between py-4">
                    <Link className="text-white text-2xl font-bold ml-5" to="">
                        P. Penev
                    </Link>
                    <ul className="hidden md:flex space-x-4 mr-10 text-white ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="projects">
                                PROJECTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="certificates">
                                CERTIFICATES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contacts">
                                CONTACTS
                            </Link>
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
