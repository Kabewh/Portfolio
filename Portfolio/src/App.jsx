import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MyWork from "./components/Projects";
import About from "./components/About";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="bg-zinc-900 font-serif">
      <Navbar />
      <Socials />
      <Homepage />
      <About />
      <MyWork />
    </div>
  );
}

export default App;
