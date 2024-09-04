import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./Pages/aboutMe.jsx";
import Portfolio from "./Pages/MyPortfolio.jsx";
import Skills from "./Pages/MySkills.jsx";
import Contact from "./Pages/ContactMe.jsx";
import Navigation from "./components/nav.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation /> {/* Component nav.jsx*/}
        <Routes>
          {/* Routing to different pages*/}

          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Portfolio />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
