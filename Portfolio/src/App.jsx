import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import MyWork from "./pages/Projects";
import About from "./pages/About";
import Socials from "./components/Socials";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-zinc-900 font-serif">
      <Navbar />
      <Socials />
      <Homepage />
      <About />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
