import { BsFillMouseFill } from "react-icons/bs";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/sections/featuredProjects";
import Footer from "../components/sections/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </>
  );
};

export default Home;
