import { useState, useEffect, Fragment } from "react";
import { ScaleLoader } from "react-spinners";
import AOS from "aos";

import Layout from "./components/Layout/Layout";
import Hero from "./components/Layout/desktop/Hero";
import DesktopNav from "./components/navigation/DesktopNav";
import About from "./components/Layout/About";
import Facts from "./components/Layout/Facts";
import Resume from "./components/Layout/Resume";
import PastProjects from "./components/Layout/PastProjects";
import MobileNav from "./components/navigation/MobileNav";
import Testimonial from "./components/Layout/Testimonial";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

   let loaderSetTimeout =setTimeout(() =>{
      setLoading(false)
    }, 1500)

    return (() => {
      clearTimeout(loaderSetTimeout)
    })
  }, []);

  return (
      <>
       {loading ? <div className="flex h-screen justify-center items-center">
          <ScaleLoader color="#0678E3" size={100} />
        </div> :
        <Fragment>
          <DesktopNav />
          <MobileNav />
          <Layout>
            <Hero />
            <About />
            <Facts />
            <Resume />
            <PastProjects />
            <Testimonial />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </Layout>
        </Fragment>}
      </>
      )
}

export default App;
