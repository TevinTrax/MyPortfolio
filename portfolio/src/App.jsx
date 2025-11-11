import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="grow">
        <Home/>
      </main>
      <About/>
    </div>
  );
}

export default App;
