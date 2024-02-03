function Footer() {
    return (
        <footer className="bg-gray-900">
        <div className="flex justify-center items-center space-x-4 py-8">
            <a href="https://www.instagram.com/adrenalyne" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-instagram text-white"></i>
            </a>
            <a href="https://www.facebook.com/petar.todorov.3538" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-facebook text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/peterpenev/" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-linkedin text-white"></i>
            </a>
            <a href="https://github.com/PetarWho" target="_blank" rel="noreferrer" className="text-white transition duration-300 transform hover:scale-110">
                <i className="icon fa fa-github text-white"></i>
            </a>
        </div>
        <ul className="footer-nav flex justify-center items-center space-x-4 pb-8">
            <li className="text-white transition duration-300 transform hover:scale-110">
                <a className="footer-nav-link" href="projects.html">Projects</a>
            </li>
            <li className="text-white transition duration-300 transform hover:scale-110">
                <a className="footer-nav-link" href="certificates.html">Certificates</a>
            </li>
            {/* <li className="text-white transition duration-300 transform hover:scale-110">
                <a className="footer-nav-link" href="stories.html">Stories</a>
            </li> */}
            <li className="text-white transition duration-300 transform hover:scale-110">
                <a className="footer-nav-link" href="about-me.html">About</a>
            </li>
            <li className="text-white transition duration-300 transform hover:scale-110">
                <a className="footer-nav-link" href="contact-me.html">Contacts</a>
            </li>
        </ul>
    </footer>
      
    );
}

export default Footer;