import { useState } from 'react';

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                                <a className="block px-4 hover:bg-gray-800" href="/">
                                    HOME
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="block px-4 hover:bg-gray-800" href="/projects">
                                    PROJECTS
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="block px-4 hover:bg-gray-800" href="/certificates">
                                    CERTIFICATES
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="block px-4 hover:bg-gray-800" href="/stories">
                                    STORIES
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="block px-4 hover:bg-gray-800" href="/about">
                                    ABOUT
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="block px-4 hover:bg-gray-800" href="/contacts">
                                    CONTACTS
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileMenu;
