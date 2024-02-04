import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/home/Home";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Projects from "./layouts/projects/Projects";
import Certificates from "./layouts/certificates/Certificates";
import About from "./layouts/about/About";
import Contacts from "./layouts/contacts/Contacts";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="pt-16 overflow-y-auto flex-grow">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
