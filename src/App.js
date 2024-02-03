import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/home/Home";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Projects from "./layouts/projects/Projects";
import Certificates from "./layouts/certificates/Certificates";
import About from "./layouts/about/About";
import Contacts from "./layouts/contacts/Contacts";
import { Switch } from '@headlessui/react';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
        <div className="pt-16 overflow-y-auto flex-grow">
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="./projects"><Projects /></Route>
            <Route exact path="./certificates"><Certificates /></Route>
            <Route exact path="./about"><About /></Route>
            <Route exact path="./contacts"><Contacts /></Route>
          </Switch>
        </div>
        <Footer />
    </div>
  );
}
export default App;
