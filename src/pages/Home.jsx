import About from "../Components/About";
import Certification from "../Components/Certification";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Journey from "../Components/Journey";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Journey />
      <Services />
      <Projects />
      <Certification />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
