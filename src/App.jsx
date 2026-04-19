import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsappChat from "./pages/WhatsappChat.jsx";
import Footer from "./components/Footer.jsx";
import RatingCard from "./pages/RatingCard.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <WhatsappChat/>

      <main className="grow">
        <Home/>
        <About/>
        <Projects/>
        <RatingCard/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
