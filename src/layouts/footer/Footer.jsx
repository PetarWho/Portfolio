import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900">
        <div className="flex justify-center items-center space-x-4 py-8">
            <Link to="https://www.instagram.com/adrenalyne" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-instagram text-white"></i>
            </Link>
            <Link to="https://www.facebook.com/petar.todorov.3538" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-facebook text-white"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/peterpenev/" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-linkedin text-white"></i>
            </Link>
            <Link to="https://github.com/PetarWho" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-github text-white"></i>
            </Link>
        </div>
        <ul className="footer-nav flex justify-center items-center space-x-4 pb-8">
            <li className="text-white transition duration-300 transform hover:scale-110">
                <Link className="footer-nav-link" to="projects">Projects</Link>
            </li>
            <li className="text-white transition duration-300 transform hover:scale-110">
                <Link className="footer-nav-link" to="certificates">Certificates</Link>
            </li>
            <li className="text-white transition duration-300 transform hover:scale-110">
                <Link className="footer-nav-link" to="about">About</Link>
            </li>
            <li className="text-white transition duration-300 transform hover:scale-110">
                <Link className="footer-nav-link" to="contacts">Contacts</Link>
            </li>
        </ul>
    </footer>
      
    );
}

export default Footer;