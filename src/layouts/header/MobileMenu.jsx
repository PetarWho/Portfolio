import { useState } from 'react';
import { Link } from "react-router-dom";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button className="block md:hidden text-white focus:outline-none mr-10" onClick={toggleMenu}>
                <i className="fas fa-bars text-3xl"></i>
            </button>
            <div className={`bg-gray-900 absolute top-full right-0 mobile-menu rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} style={{ minWidth: '150px' }}>
                {isOpen && (
                    <div className="py-2">
                        <ul className="text-white text-center">
                            <li className="py-2">
                                <Link className="block px-4 hover:bg-gray-800" to="projects" onClick={closeMenu}>
                                    PROJECTS
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link className="block px-4 hover:bg-gray-800" to="certificates" onClick={closeMenu}>
                                    CERTIFICATES
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link className="block px-4 hover:bg-gray-800" to="about" onClick={closeMenu}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link className="block px-4 hover:bg-gray-800" to="contacts" onClick={closeMenu}>
                                    CONTACTS
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileMenu;
