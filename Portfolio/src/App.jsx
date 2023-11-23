import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Socials from "./components/Socials";
import Contact from "./pages/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-zinc-900 font-serif">
      <Router>
        <Navbar />
        <Socials />
        <Homepage />
        <About />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
